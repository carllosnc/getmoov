const questions = require("../questions")
const formats = require("../formats")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const actions = require("../actions")
const crawlers = require("../crawlers")

const loadingSearch = ora("Searching movies...")
const loadingSubtitles = ora("Searching subtitles...")

async function popcornMovie(){
  /*=========================
    Movie
  ===========================*/

  // search movies
  const searchName = await questions.searchMovies()

  loadingSearch.start()
  const movies = await services.getPopcornMovies(searchName)
  loadingSearch.stop()

  // no result
  if (!movies.length) {
    print.errorMessage("\n  No movies found.")
    print.credits()
    process.exit()
  }

  // choose the movie
  const movie = await questions.selectMovie(formats.popcornMoviesList(movies))

  // show the movie
  print.popcornMovie(movie)

  /*=========================
    Torrents
  ===========================*/

  // select torrent quality
  const torrentQuality = await questions.selectTorrent(formats.popcornTorrents(movie))

  /*=========================
    Torrent Client
  ===========================*/

  // select the torrent client
  const client = await questions.selectTorrentClient()

  // open torrent client
  actions.openClient(client, torrentQuality)

  /*=========================
    Subtitle
  ===========================*/

  loadingSubtitles.start()
  const subtitles = await services.getSubtitles(movie.imdb_id)
  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(subtitles)

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

module.exports = popcornMovie
