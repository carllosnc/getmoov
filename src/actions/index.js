const print = require("../print")
const shell = require("../shell")

function openClient(clientResult, torrentResult) {
  const { client } = clientResult
  const { torrent } = torrentResult

  if (client === "print") {
    print.torrentLink(torrent)
  } else {
    shell.run(`${client} ${torrent}`)
  }
}

function downloadSubtitle(client, subtitle) {
  if (client === "print") {
    print.subtitleLink(subtitle)
  } else if (client === "wget") {
    shell.run(`wget -P ~/Downloads/ ${subtitle}`)
    print.successMessage("\n  Subtitle saved in your download folder [ ~/Download ]")
  } else {
    shell.run(`${client} ${subtitle}`)
  }
}

module.exports = {
  openClient,
  downloadSubtitle,
}
