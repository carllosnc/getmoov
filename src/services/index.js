const movieServices = require("./yts")
const popcornServices = require("./popcorn")
const subtitlesServices = require("./subtitles")

module.exports = {
  ...movieServices,
  ...subtitlesServices,
  ...popcornServices
}
