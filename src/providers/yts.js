const questions = require("../questions")
const formats = require("../formats")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const crawlers = require("../crawlers")

const loadingSearch = ora("Searching movie...")
const loadingSubtitles = ora("Searching subtitles...")

async function yts(afterAll) {
  const searchName = await questions.searchMovies()

  loadingSearch.start()
  const movies = await services.getYtsMovies(searchName)
  loadingSearch.stop()

  if(!movies){
    print.error("\n  No Movies found")
    afterAll()
    return false
  }

  const movie = await questions.selectMovie(formats.ytsMoviesList(movies))

  print.movie(movie)

  const torrentQuality = await questions.selectTorrent(formats.ytsTorrents(movie.torrents))

  print.message(formats.torrentLink(torrentQuality))

  loadingSubtitles.start()
  const subtitle = await services.getSubtitles(movie.imdb_code)
  loadingSubtitles.stop()

  const filteredSubtitles = crawlers.filterSubtitles(subtitle)

  if(!filteredSubtitles.length){
    print.error("  No subtitle found")
    afterAll()
    return false
  }

  const selectedSubtitle = await questions.selectSubtitle(filteredSubtitles)

  print.message(formats.subtitleLink(selectedSubtitle))

  afterAll()
}

module.exports = { yts }
