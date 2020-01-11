const questions = require("../questions")
const formats = require("../formats")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const actions = require("../actions")
const crawlers = require("../crawlers")

const loadingSearch = ora("Searching movie...")
const loadingTorrents = ora("Searching torrents...")
const loadingSubtitles = ora("Searching subtitles...")

async function yts() {

  /*=========================
    Search
  ===========================*/

  // search movies
  const searchName = await questions.searchMovies()

  loadingSearch.start()
  const movies = await services.getYtsMovies(searchName)
  loadingSearch.stop()

  // no result
  if (!movies) {
    print.errorMessage("\n  No movies found.")
    print.credits()
    process.exit()
  }

  /*=========================
    Movie
  ===========================*/

  // chose the movie
  const movie = await questions.selectMovie(formats.ytsMoviesList(movies))

  // show the movie
  print.movie(movie)

  /*=========================
    Torrents
  ===========================*/

  // get torrents
  loadingTorrents.start()
  const popCornResponse = await services.getPopcornTorrents(movie.imdb_code)
  loadingTorrents.stop()

  // select torrent quality
  const torrentQuality = await questions.selectTorrent([
    ...formats.ytsTorrents(movie.torrents),
    ...formats.popcornTorrents(popCornResponse),
  ])

  /*=========================
    Torrent Client
  ===========================*/

  // select torrent client
  const client = await questions.selectTorrentClient()

  // open torrent client
  actions.openClient(client, torrentQuality)

  /*=========================
    Subtitle
  ===========================*/

  // get legends
  loadingSubtitles.start()
  const legends = await services.getSubtitles(movie.imdb_code)
  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(legends)

  // no subtitle found
  if (!filteredSubtitles.length) {
    print.errorMessage("  No subtitles found.")
    print.credits()
    process.exit()
  }

  // select legend
  const selectedSubtitle = await questions.selectSubtitle(filteredSubtitles)

  /*=========================
    Subtitle client
  ===========================*/

  // download subtitle
  const subtitleClient = await questions.selectSubtitleClient()
  actions.downloadSubtitle(subtitleClient, selectedSubtitle)

  /*=========================
    Credits
  ===========================*/

  print.credits()
}

module.exports = { yts }