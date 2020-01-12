const shell = require("../shell")

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

module.exports = {
  torrentClientOptions
}
