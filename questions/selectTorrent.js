const inquirer = require("inquirer")
const shell = require("shelljs")
const formats = require("../formats")
const selectLegend = require("./selectLegend")

function clientOptions(){
  const options = [{
    name: "Print Link",
    value: "print"
  }]

  if(shell.which("qbittorrent")){
    options.push({
      name: "QBitTorrent",
      value: "qbittorrent"
    })
  }

  return options
}

async function selectTorrent(options){
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "torrent",
        message: "Torrent quality:",
        choices: options
      },
      {
        type: "list",
        name: "client",
        message: "Torrent Client",
        choices: clientOptions()
      }
    ])

    const {torrent, client} = result

    if(client === "print"){
      formats.formatTorrentLink(torrent)
    }else{
      shell.exec(`${client} ${torrent}`)
    }

  } catch (error) {
    formats.errorMessage(error.message)
  }
}

module.exports = selectTorrent
