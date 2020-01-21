const inquirer = require("inquirer")
const print = require("../print")
const formats = require("../formats")

async function selectSubtitleClient() {
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "subtitleClient",
        message: "Download Subtitles:",
        choices: formats.subtitleClients(),
      },
    ])

    return result.subtitleClient

  } catch (error) {
    print.errorMessage(error.message)
  }
}

module.exports = selectSubtitleClient
