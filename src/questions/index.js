const selectProvider = require("./selectProvider")
const selectMediaType = require("./selectMediaType")

const tvShows = require("./tvShows")
const movies = require("./movies")
const torrents = require("./torrents")
const subtitle = require("./subtitle")

module.exports = {
  selectProvider,
  selectMediaType,
  ...subtitle,
  ...torrents,
  ...tvShows,
  ...movies
}
