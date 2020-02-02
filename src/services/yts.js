const values = require("../values")
const axios = require("axios")
const print = require("../print")

const { SERVERS } = values

const httpBase = axios.create({
  baseURL: SERVERS.YTS
})

async function getYtsMovies(movieName) {
  try {
    const res = await httpBase(`/list_movies.json?query_term="${movieName}"&sort_by=year&limit=50`)
    return res.data.data.movies
  } catch (error) {
    print.error(` (Get Movies - service): ${error.message}`)
    process.exit()
  }
}

async function getYtsMovieDetails(movieId) {
  try {
    const res = await httpBase.get(`/movie_details.json?movie_id=${movieId}`)
    return res.data
  } catch (error) {
    print.error(` (Get movie details - service): ${error.message}`)
    process.exit()
  }
}

module.exports = {
  getYtsMovies,
  getYtsMovieDetails,
}
