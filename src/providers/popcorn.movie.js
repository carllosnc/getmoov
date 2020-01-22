const questions = require("../questions")
const formats = require("../formats")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const actions = require("../actions")
const crawlers = require("../crawlers")
const exceptions = require("../exceptions")

const loadingSearch = ora("Searching movies...")
const loadingSubtitles = ora("Searching subtitles...")

async function popcornMovie(){
  const searchName = await questions.searchMovies()

  loadingSearch.start()

  const movies = await services.getPopcornMovies(searchName)

  loadingSearch.stop()

  exceptions.noResult(movies.length, "No movies found.")

  const movie = await questions.selectMovie(formats.popcornMoviesList(movies))

  print.popcornMovie(movie)

  const torrentQuality = await questions.selectTorrent(formats.popcornTorrents(movie))

  const client = await questions.selectTorrentClient()

  actions.openClient(client, torrentQuality)

  loadingSubtitles.start()

  const subtitles = await services.getSubtitles(movie.imdb_id)

  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(subtitles)

  exceptions.noResult(filteredSubtitles.length, "No subtitles found.")

  const selectedSubtitle = await questions.selectSubtitle(filteredSubtitles)

  const subtitleClient = await questions.selectSubtitleClient()

  actions.downloadSubtitle(subtitleClient, selectedSubtitle)

  print.credits()
}

module.exports = popcornMovie
