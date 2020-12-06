const print = require("../print")
const formats = require("../formats")

function printTorrentLink(torrent) {
  print.message(formats.torrentLink(torrent))
}

function printSubtitleLink(subtitle) {
  print.message(formats.subtitleLink(subtitle))
}

module.exports = {
  printTorrentLink,
  printSubtitleLink,
}
