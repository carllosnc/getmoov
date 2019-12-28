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

module.exports = {
  openClient
}
