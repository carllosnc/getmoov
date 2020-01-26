const shell = require("../shell")
const colors = require("../colors")

function torrentClientOptions() {
  const options = [
    {
      name: "Print Link",
      value: "print",
    },
  ]

  if (shell.which("qbittorrent")) {
    options.push({
      name: "QBitTorrent",
      value: "qbittorrent",
    })
  }

  return options
}

function torrentLink(torrent) {
  return `\n  ${colors.GreenBg(" TORRENT LINK: ")} ${torrent} \n`
}

module.exports = {
  torrentClientOptions,
  torrentLink
}
