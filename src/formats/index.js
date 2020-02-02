const ytsFormats = require("./yts")
const torrentFormats = require("./torrents")
const subtitlesFormats = require("./subtitles")
const popcornFormats = require("./popcorn")
const colors = require("../colors")

function errorMessage(message) {
  return colors.Err(`${message}`)
}

function successMessage(message) {
  return colors.GreenBold(`${message}`)
}

module.exports = {
  ...ytsFormats,
  ...torrentFormats,
  ...subtitlesFormats,
  ...popcornFormats,
  errorMessage,
  successMessage
}
