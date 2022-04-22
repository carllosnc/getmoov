import axios from 'axios'
import { YIFY_SUBS } from '../values/index.js'
import { errorMessage } from '../print/index.js'

const { create } = axios

const httpBase = create({
  baseURL: YIFY_SUBS,
})

export async function getSubtitles(imdbId) {
  try {
    const res = await httpBase.get(`/movie-imdb/${imdbId}`)
    return res.data
  } catch (error) {
    errorMessage(` (Get subtitles - service): ${error.message}`)
    process.exit()
  }
}
