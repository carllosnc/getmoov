const print = require("../print")
const shell = require("shelljs")

function openClient(clientResult, torrentResult){
  const {client} = clientResult
  const {torrent} = torrentResult

  if(client === "print"){
    print.torrentLink(torrent)
  }else{
    shell.exec(`${client} ${torrent}`)
  }
}

function downloadSubtitle(client, subtitle){
  if(client === "print"){
    print.subtitleLink(subtitle)
  }
  else if(client === "wget"){
    shell.exec(`wget -P ~/Downloads/ ${subtitle}`)
    print.successMessage(`  Subtitle saved in your download folder [ ~/Download ]`)
  }
  else{
    shell.exec(`${client} ${subtitle}`)
  }
}

module.exports = {
  openClient,
  downloadSubtitle
}
