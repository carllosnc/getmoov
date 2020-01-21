const searchMovies = require("./searchMovies")
const selectMovie = require("./selectMovie")
const selectTorrent = require("./selectTorrent")
const selectSubtitle = require("./selectSubtitle")
const selectTorrentClient = require("./selectTorrentClient")
const selectSubtitleClient = require("./selectSubtitleClient")
const selectProvider = require("./selectProvider")
const selectMediaType = require("./selectMediaType")

const tvShows = require("./tvShows")

module.exports = {
  selectProvider,
  searchMovies,
  selectMovie,
  selectTorrent,
  selectSubtitle,
  selectTorrentClient,
  selectSubtitleClient,
  selectMediaType,
  ...tvShows
}
