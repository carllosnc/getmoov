const movieServices = require("./yts")
const subtitlesServices = require("./subtitles")

module.exports = {
  ...movieServices,
  ...subtitlesServices,
}
