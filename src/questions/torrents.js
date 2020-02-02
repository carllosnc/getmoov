const inquirer = require("inquirer")
const print = require("../print")
const formats = require("../formats")

async function selectTorrent(torrentOptions) {
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "torrent",
        message: "Torrent quality:",
        choices: torrentOptions,
      },
    ])

    return result.torrent

  } catch (error) {
    print.error(error.message)
  }
}

async function selectTorrentClient() {
  try {
    const result = await inquirer.prompt({
      type: "list",
      name: "client",
      message: "Torrent client:",
      choices: formats.torrentClientOptions(),
    })

    return result.client

  } catch (error) {
    print.error(error.message)
  }
}

module.exports = {
  selectTorrent,
  selectTorrentClient
}
