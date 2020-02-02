const ytsFormats = require("./yts")
const torrentFormats = require("./torrents")
const subtitlesFormats = require("./subtitles")
const popcornFormats = require("./popcorn")

module.exports = {
  ...ytsFormats,
  ...torrentFormats,
  ...subtitlesFormats,
  ...popcornFormats
}
