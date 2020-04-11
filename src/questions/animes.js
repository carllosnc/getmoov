const inquirer = require("inquirer")
const print = require("../print")

async function searchAnimes(){
  try{
    const result = await inquirer.prompt([
      {
        type: "input",
        name: "animeName",
        message: "Search anime:"
      }
    ])

    return result.animeName

  }catch(error){
    print.error(error.message)
  }
}

async function selectAnime(list){
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "anime",
        message: `Choose the anime (${list.length}) results:`,
        choices: list,
        pageSize: 20
      }
    ])

    return result.anime

  } catch (error) {
    print.error(error.message)
  }
}

async function selectAnimeEp(list){
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "animeEp",
        message: "Choose the episode",
        choices: list,
        pageSize: 20
      }
    ])

    return result.animeEp

  } catch (error) {
    print.error(error.message)
  }
}

module.exports = {
  searchAnimes,
  selectAnime,
  selectAnimeEp
}
