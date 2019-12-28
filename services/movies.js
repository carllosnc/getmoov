const values = require("../values")
const axios = require("axios")
const print = require("../print")

async function getMovies(movieName){
  const { SERVERS } = values
  const endpoint = `${SERVERS.YTS}/list_movies.json?query_term="${movieName}"&sort_by=year&limit=50`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    print.errorMessage(error.message)
  }
}

async function getMovieDetails(movieId){
  const { SERVERS } = values
  const endpoint = `${SERVERS.YTS}/movie_details.json?movie_id=${movieId}`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    print.errorMessage(error.message)
  }
}

async function getpopcornTorrents(imdbId){
  const { SERVERS } = values
  const endpoint = `${SERVERS.POPCORN}/movie/${imdbId}`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    // for debug: print.errorMessage(error.message)
  }
}

module.exports = {
  getMovies,
  getMovieDetails,
  getpopcornTorrents
}
