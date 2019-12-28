const inquirer = require("inquirer")
const print = require("../print")
const formats = require("../formats")

async function selectClient(){
  try {
    const result = await inquirer.prompt({
      type: "list",
      name: "client",
      message: "Torrent client",
      choices: formats.torrentClientOptions()
    })

    return result

  } catch (error) {
    print.errorMessage(error.message)
  }
}

module.exports = selectClient