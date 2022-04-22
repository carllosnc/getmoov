import { YTS } from '../values/index.js'
import axios from 'axios'
import { errorMessage } from '../print/index.js'

const { create } = axios

const httpBase = create({
  baseURL: YTS,
})

export async function getYtsMovies(movieName) {
  try {
    const res = await httpBase.get(
      `/list_movies.json?query_term="${movieName}"&sort_by=year&limit=50`
    )
    return res.data.data.movies
  } catch (error) {
    errorMessage(` (Get Movies - service): ${error.message}`)
    process.exit()
  }
}

export async function getYtsMovieDetails(movieId) {
  try {
    const res = await httpBase.get(`/movie_details.json?movie_id=${movieId}`)
    return res.data
  } catch (error) {
    errorMessage(` (Get movie details - service): ${error.message}`)
    process.exit()
  }
}
