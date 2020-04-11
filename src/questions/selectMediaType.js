const inquirer = require("inquirer")
const print = require("../print")

async function selectMediaType(){
  try{
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "mediatype",
        message: "Select the media type:",
        choices: ["Movies", "TV Shows", "Animes"]
      }
    ])

    return result.mediatype

  }catch (error){
    print.error(error.message)
  }
}

module.exports = selectMediaType
