const selectProvider = require("./selectProvider")
const movies = require("./movies")
const torrents = require("./torrents")
const subtitle = require("./subtitle")

module.exports = {
  selectProvider,
  ...subtitle,
  ...torrents,
  ...movies,
}
