const movieServices = require("./movies")
const subtitlesServices = require("./subtitles")

module.exports = {
  ...movieServices,
  ...subtitlesServices,
}
