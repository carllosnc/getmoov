const colors = require("../colors")

function torrentLink(torrent) {
  return `\n  ${colors.GreenBg(" TORRENT LINK: ")} ${torrent} \n`
}

module.exports = {
  torrentLink
}
