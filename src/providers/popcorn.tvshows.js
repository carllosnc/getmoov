const questions = require("../questions")
const services = require("../services")
const ora = require("ora")
const print = require("../print")
const formats = require("../formats")
const actions = require("../actions")

const loadingSearch = ora("Searching TV shows...")
const loadingTvShow = ora("Loading TV show...")

async function PopCornTvShows(){
  /*=========================
    Tv show
  ===========================*/

  // search tv shows
  const searchName = await questions.searchTvShows()

  loadingSearch.start()
  const tvshows = await services.getPopCornTvShows(searchName)
  loadingSearch.stop()

  if(!tvshows.length){
    print.errorMessage("\n  No TV show found")
    print.credits()
    process.exit()
  }

  // choose tv show
  const tvshow = await questions.selectTvShow(formats.popcornTvShowList(tvshows))

  loadingTvShow.start()
  const details = await services.getPopCornTvShowDetails(tvshow.imdb_id)
  loadingTvShow.stop()

  // select episode
  const episode = await questions.selectTvShowEp(formats.popcornTvShowEp(details.episodes))

  // select torrent
  const torrent = await questions.selectTvShowEpTorrent(formats.popcornTvShowTorrent(episode))

  // select client
  const client = await questions.selectTorrentClient()

  actions.openClient(client, torrent)

  print.credits()
}

module.exports = PopCornTvShows
