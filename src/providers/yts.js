const questions = require("../questions")
const formats = require("../formats")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const actions = require("../actions")
const crawlers = require("../crawlers")
const exceptions = require("../exceptions")

const loadingSearch = ora("Searching movie...")
const loadingSubtitles = ora("Searching subtitles...")

async function yts() {
  const searchName = await questions.searchMovies()

  loadingSearch.start()
  const movies = await services.getYtsMovies(searchName)
  loadingSearch.stop()

  exceptions.noResult(movies, "No movies found.")

  const movie = await questions.selectMovie(formats.ytsMoviesList(movies))

  print.movie(movie)

  const torrentQuality = await questions.selectTorrent(formats.ytsTorrents(movie.torrents))

  actions.printTorrentLink(torrentQuality)

  loadingSubtitles.start()
  const legends = await services.getSubtitles(movie.imdb_code)
  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(legends)

  exceptions.noResult(filteredSubtitles.length, "No subtitles found.")

  const selectedSubtitle = await questions.selectSubtitle(filteredSubtitles)

  actions.printSubtitleLink(selectedSubtitle)

  print.credits()
}

module.exports = { yts }
