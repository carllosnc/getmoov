const inquirer = require("inquirer")
const print = require("../print")

async function searchTvShows(){
  try{
    const result = await inquirer.prompt([
      {
        type: "input",
        name: "tvShowName",
        message: "Search TV Show:"
      }
    ])

    return result.tvShowName

  }catch (error) {
    print.errorMessage(error.message)
  }
}

async function selectTvShow(list){
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "tvshow",
        message: `Choose the TV Show (${list.length}) results:`,
        choices: list,
        pageSize: 20
      }
    ])

    return result.tvshow

  } catch (error) {
    print.errorMessage(error.message)
  }
}

async function selectTvShowEp(list){
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "episode",
        message: "Select the episode:",
        choices: list,
        pageSize: 20
      }
    ])

    return result.episode

  } catch (error) {
    print.errorMessage(error.message)
  }
}

async function selectTvShowEpTorrent(list){
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "torrent",
        message: "Select the torrent:",
        choices: list,
        pageSize: 20
      }
    ])

    return result.torrent

  } catch (error) {
    print.errorMessage(error.message)
  }
}

module.exports = {
  searchTvShows,
  selectTvShow,
  selectTvShowEp,
  selectTvShowEpTorrent
}
