const inquirer = require("inquirer")
const print = require("../print")

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

    return result
  } catch (error) {
    print.errorMessage(error.message)
  }
}

module.exports = selectTorrent
