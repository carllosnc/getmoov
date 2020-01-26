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
const loadingAction = ora("Loading...")

async function yts() {
  const searchName = await questions.searchMovies()

  loadingSearch.start()

  const movies = await services.getYtsMovies(searchName)

  loadingSearch.stop()

  exceptions.noResult(movies, "No movies found.")

  const movie = await questions.selectMovie(formats.ytsMoviesList(movies))

  print.movie(movie)

  const torrentQuality = await questions.selectTorrent(formats.ytsTorrents(movie.torrents))

  const client = await questions.selectTorrentClient()

  actions.openClient(client, torrentQuality)

  loadingSubtitles.start()

  const legends = await services.getSubtitles(movie.imdb_code)

  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(legends)

  exceptions.noResult(filteredSubtitles.length, "No subtitles found.")

  const selectedSubtitle = await questions.selectSubtitle(filteredSubtitles)

  const subtitleClient = await questions.selectSubtitleClient()

  loadingAction.start()

  const actionResult = await actions.downloadSubtitle(subtitleClient, selectedSubtitle)

  loadingAction.stop()

  print.message(actionResult)

  print.credits()
}

module.exports = { yts }