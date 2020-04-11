const questions = require("../questions")
const ora = require("ora")
const services = require("../services")
const formats = require("../formats")
const exeptions = require("../exceptions")
const print = require("../print")
const actions = require("../actions")

const loadingSearch = ora("Searching animes...")
const loadingEpisodes = ora("Loading episodes...")

async function popcornAnime () {
  const searchName = await questions.searchAnimes()

  loadingSearch.start()
  const animes = await services.getPopCornAnimes(searchName)
  loadingSearch.stop()

  exeptions.noResult(animes.length, "No animes found")

  const anime = await questions.selectAnime(formats.popcornAnimeList(animes))
  print.popcornAnime(anime)

  loadingEpisodes.start()
  const details = await services.getPopcornAnimeDetails(anime._id)
  loadingEpisodes.stop()

  const episode = await questions.selectAnimeEp(formats.popcornAnimeEp(details.episodes))

  const torrent = await questions.selectTorrent(formats.popcornSerieTorrents(episode))

  const client = await questions.selectTorrentClient()

  actions.openClient(client, torrent)

  print.credits()
}

module.exports = popcornAnime
