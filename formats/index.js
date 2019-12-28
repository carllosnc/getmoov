const movieFormats = require("./movies")
const torrentFormats = require("./torrents")

module.exports = {
  ...movieFormats,
  ...torrentFormats
}
