const values = require("../values")
const axios = require("axios")
const print = require("../print")

async function getYtsMovies(movieName) {
  const { SERVERS } = values
  const endpoint = `${SERVERS.YTS}/list_movies.json?query_term="${movieName}"&sort_by=year&limit=50`

  try {
    const res = await axios.get(endpoint)
    return res.data.data.movies
  } catch (error) {
    print.errorMessage(` (Get Movies - service): ${error.message}`)
    process.exit()
  }
}

async function getYtsMovieDetails(movieId) {
  const { SERVERS } = values
  const endpoint = `${SERVERS.YTS}/movie_details.json?movie_id=${movieId}`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    print.errorMessage(` (Get movie details - service): ${error.message}`)
    process.exit()
  }
}

module.exports = {
  getYtsMovies,
  getYtsMovieDetails,
}
