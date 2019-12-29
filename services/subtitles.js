const axios = require("axios")
const values = require("../values")
const print = require("../print")

async function getSubtitles(imdbId){
  const { SERVERS } = values
  const endpoint = `${SERVERS.YIFY_LEGENDS}/movie-imdb/${imdbId}1`

  try {
    const res = await axios.get(endpoint)
    return res.data
  } catch (error) {
    print.errorMessage(` (Get subtitles - service): ${error.message}`)
    process.exit()
  }
}

module.exports = {
  getSubtitles
}
