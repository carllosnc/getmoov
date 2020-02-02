const axios = require("axios")
const values = require("../values")
const print = require("../print")

const { SERVERS } = values

const httpBase = axios.create({
  baseURL: SERVERS.YIFY_LEGENDS
})

async function getSubtitles(imdbId) {
  try {
    const res = await httpBase.get(`/movie-imdb/${imdbId}`)
    return res.data
  } catch (error) {
    print.error(` (Get subtitles - service): ${error.message}`)
    process.exit()
  }
}

module.exports = {
  getSubtitles,
}
