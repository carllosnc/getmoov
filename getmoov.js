const questions = require("./questions")
const formats = require("./formats")
const services = require("./services")
const ora = require("ora")
const print = require("./print")
const actions = require("./actions")
const crawlers = require("./crawlers")

const loadingSearch = ora("Searching movie...")
const loadingTorrents = ora("Searching torrents...")
const loadingSubtitles = ora("Searching subtitles...")

print.logo()

async function app(){
  /*=========================
    Search
  ===========================*/

  // Search movies
  const searchName = await questions.searchMovies()

  loadingSearch.start()
  const moviesResponse = await services.getMovies(searchName)
  const { movies } = moviesResponse.data
  loadingSearch.stop()

  // No result
  if(!movies){
    print.noResultFound()
    return false
  }

  /*=========================
    Movie
  ===========================*/

  // Chose the movie
  const movie = await questions.selectMovie(movies)

  // Show the movie
  print.movie(movie)

  /*=========================
    Torrents
  ===========================*/

  // Get torrents
  loadingTorrents.start()
  const popCornResponse = await services.getpopcornTorrents(movie.imdb_code)
  loadingTorrents.stop()

  // Select torrent quality
  const torrentQuality = await questions.selectTorrent([
    ...formats.ytsTorrents(movie.torrents),
    ...formats.popcornTorrents(popCornResponse)
  ])

  /*=========================
    Torrent Client
  ===========================*/

  // Select torrent client
  const client = await questions.selectTorrentClient()

  // Open torrent client
  actions.openClient(client, torrentQuality)

  /*=========================
    Subtitle
  ===========================*/

  // Get legends
  loadingSubtitles.start()
  const legends = await services.getSubtitles(movie.imdb_code)
  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(legends)

  // Select legend
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

app()
