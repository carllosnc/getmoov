const questions = require("../questions")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const formats = require("../formats")
const actions = require("../actions")
const exceptions = require("../exceptions")

const loadingSearch = ora("Searching TV shows...")
const loadingTvShow = ora("Loading TV show...")

async function PopCornTvShows(){
  const searchName = await questions.searchTvShows()

  loadingSearch.start()
  const tvshows = await services.getPopCornTvShows(searchName)
  loadingSearch.stop()

  exceptions.noResult(tvshows.length, "No TV show found")

  const tvshow = await questions.selectTvShow(formats.popcornTvShowList(tvshows))

  print.popcornTvShow(tvshow)

  loadingTvShow.start()
  const details = await services.getPopCornTvShowDetails(tvshow.imdb_id)
  loadingTvShow.stop()

  const episode = await questions.selectTvShowEp(formats.popcornTvShowEp(details.episodes))

  const torrentQuality = await questions.selectTorrent(formats.popcornSerieTorrents(episode))

  const client = await questions.selectTorrentClient()

  actions.openClient(client, torrentQuality)

  print.credits()
}

module.exports = PopCornTvShows
