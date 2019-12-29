const movieFormats = require("./movies")
const torrentFormats = require("./torrents")
const subtitlesFormats = require("./subtitles")

module.exports = {
  ...movieFormats,
  ...torrentFormats,
  ...subtitlesFormats,
}
