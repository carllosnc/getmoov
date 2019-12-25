const inquirer = require("inquirer")
const shell = require("shelljs")
const format = require("../formats")

function selectTorrent(options){
  inquirer
  .prompt([
    {
      type: "list",
      name: "torrent",
      message: "Choose torrent quality:",
      choices: options
    }
  ])
  .then(res => {
    if(shell.which("qbittorrent")){
      shell.exec(`qbittorrent ${res.torrent}`)
    }else{
      format.formatTorrentLink(res.torrent)
    }
  })
}

module.exports = selectTorrent
