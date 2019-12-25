const inquirer = require("inquirer")
const shell = require("shelljs")
const formats = require("../formats")

async function selectTorrent(options){
  try {
    const result = await inquirer.prompt([{
      type: "list",
      name: "torrent",
      message: "Choose torrent quality:",
      choices: options
    }])

    const {torrent} = result

    if(shell.which("qbittorrent")){
      shell.exec(`qbittorrent ${torrent}`)
      formats.formatCredits()
    }else{
      formats.formatTorrentLink(torrent)
    }
  } catch (error) {
    formats.errorMessage(error.message)
  }
}

module.exports = selectTorrent
