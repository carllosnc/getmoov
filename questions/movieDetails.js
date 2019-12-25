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

function success(ytsResponse, searchMovieQuestion){
  const { movie } = ytsResponse

  if(movie === "back"){
    searchMovieQuestion()
    return false
  }

  formats.formatMovie(movie)
  spinner.start()

  services
    .getPopcornTorrents(movie.imdb_code)
    .then(popCornResponse => {
      spinner.stop()
      selectTorrent([
        ...formats.formatYtsTorrents(movie.torrents),
        ...formats.formatPopcornTorrents(popCornResponse)
      ])
    })
}

function error(error){
  formats.errorMessage(error.message)
}

function movieDetails(searchMovieQuestion, list){
  inquirer
    .prompt([
      {
        type: "list",
        name: "movie",
        message: `Choose the movie (${list.length} results):`,
        choices: [...list, backOption],
        pageSize: 20
      }
    ])
    .then(res => {
      success(res, searchMovieQuestion)
    })
    .catch(error)
}

module.exports = movieDetails
