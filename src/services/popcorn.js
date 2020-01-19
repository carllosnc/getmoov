const axios = require("axios")
const values = require("../values")
const print = require("../print")

async function getPopcornMovies(movieName){
  const { SERVERS } = values
  const endpoint = `${SERVERS.POPCORN}/movies/1?keywords="${movieName}"`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    print.errorMessage(` (Popcorn: get movies): ${error.message}`)
    process.exit()
  }
}

async function getPopcornTorrents(imdbId) {
  const { SERVERS } = values
  const endpoint = `${SERVERS.POPCORN}/movie/${imdbId}`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    print.errorMessage(" No torrents provided by Popcorn Time")
    process.exit()
  }
}

module.exports = {
  getPopcornMovies,
  getPopcornTorrents
}
