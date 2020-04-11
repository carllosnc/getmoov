const print = require("../print")
const shell = require("../shell")
const formats = require("../formats")
const colors = require("../colors")

function openClient(client, torrent) {
  if (client === "print") {
    print.message(formats.torrentLink(torrent))
  } else {
    shell.run(`${client} ${torrent}`)
  }
}

async function downloadSubtitle(client, subtitle) {
  if (client === "print") {
    return formats.subtitleLink(subtitle)
  } else if (client === "wget") {
    await shell.run(`wget -P ~/Downloads/ ${subtitle}`)
    return colors.Green("\n  Subtitle saved in your download folder [ ~/Download ] \n")
  } else {
    shell.run(`${client} ${subtitle}`)
  }
}

module.exports = {
  openClient,
  downloadSubtitle,
}
