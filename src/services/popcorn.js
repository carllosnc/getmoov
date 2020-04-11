const axios = require("axios")
const values = require("../values")
const print = require("../print")

const { SERVERS } = values

const httpBase = axios.create({
  baseURL: SERVERS.POPCORN
})

async function getPopcornMovies(movieName){
  try {
    const res = await httpBase.get(`/movies/1?keywords="${movieName}"`)
    return res.data
  } catch (error) {
    print.error(` (Popcorn: get movies): ${error.message}`)
    process.exit()
  }
}

async function getPopcornTorrents(imdbId) {
  try {
    const res = await httpBase.get(`/movie/${imdbId}`)
    return res.data
  } catch (error) {
    print.error(" No torrents provided by Popcorn Time")
    process.exit()
  }
}

async function getPopCornTvShows(tvshowName){
  try{
    const res = await httpBase.get(`/shows/1?keywords="${tvshowName}"`)
    return res.data
  } catch (error) {
    print.error(` (Popcorn: get TV Shows): ${error.message}`)
    process.exit()
  }
}

async function getPopCornTvShowDetails(imdbId){
  try{
    const res = await httpBase.get(`/show/${imdbId}`)
    return res.data
  } catch (error) {
    print.error(" (Popcorn: get TV Show details)")
    process.exit()
  }
}

async function getPopCornAnimes(animeName){
  try{
    const res = await httpBase.get(`/animes/1?keywords="${animeName}"`)
    return res.data
  } catch (error) {
    print.error(` (Popcorn: get animes): ${error.message}`)
    process.exit()
  }
}

async function getPopcornAnimeDetails(id){
  try {
    const res = await httpBase.get(`/anime/${id}`)
    return res.data
  } catch (error) {
    print.error(` (Popcorn: get anime details): ${error.message}`)
    process.exit()
  }
}

module.exports = {
  getPopcornMovies,
  getPopcornTorrents,
  getPopCornTvShows,
  getPopCornTvShowDetails,
  getPopCornAnimes,
  getPopcornAnimeDetails
}
