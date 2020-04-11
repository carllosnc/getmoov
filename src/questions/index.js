const selectProvider = require("./selectProvider")
const selectMediaType = require("./selectMediaType")

const tvShows = require("./tvShows")
const movies = require("./movies")
const torrents = require("./torrents")
const subtitle = require("./subtitle")
const animes = require("./animes")

module.exports = {
  selectProvider,
  selectMediaType,
  ...subtitle,
  ...torrents,
  ...tvShows,
  ...movies,
  ...animes
}
