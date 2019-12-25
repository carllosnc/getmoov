const inquirer = require("inquirer")
const formats = require("../formats")
const chalk = require("chalk")
const selectTorrent = require("./selectTorrent")
const services = require("../services")
const ora = require("ora")
const spinner = ora("Searching torrents...")

const backOption = {
  name: chalk.red.bold("← BACK TO SEARCH"),
  value: "back"
}

async function success(ytsResponse, searchMovieQuestion){
  const { movie } = ytsResponse

  if(movie === "back"){
    searchMovieQuestion()
    return false
  }

  formats.formatMovie(movie)

  spinner.start()

  try {
    const popCornResponse = await services.getPopcornTorrents(movie.imdb_code)

    spinner.stop()

    selectTorrent([
      ...formats.formatYtsTorrents(movie.torrents),
      ...formats.formatPopcornTorrents(popCornResponse)
    ])
  } catch (error) {
    formats.errorMessage(error.message)
  }
}

async function movieDetails(searchMovieQuestion, list){
  try {
    const result = await inquirer.prompt([{
      type: "list",
      name: "movie",
      message: `Choose the movie (${list.length} results):`,
      choices: [...list, backOption],
      pageSize: 20
    }])

    success(result, searchMovieQuestion)

  } catch (error) {
    formats.errorMessage(error.message)
  }
}

module.exports = movieDetails
