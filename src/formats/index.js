const ytsFormats = require('./yts')
const torrentFormats = require('./torrents')
const subtitlesFormats = require('./subtitles')

module.exports = {
  ...ytsFormats,
  ...torrentFormats,
  ...subtitlesFormats,
}
