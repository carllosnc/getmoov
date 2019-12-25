const inquirer = require("inquirer")
const ora = require("ora")
const services = require("../services")
const formats = require("../formats")
const movieDetails = require("./movieDetails")
const spinner = ora("Searching movie...")

function success(res){
  const { movie_count, movies } = res.data

  spinner.stop()

  if(!movie_count){
    formats.noResultFound()
    return false
  }

  movieDetails(searchMovies, formats.formatMovieList(movies))
}

function error(err){
  formats.errorMessage(err.message)
}

function searchMovies(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "movieName",
      message: "Search movie:"
    },
  ])
  .then(res => {
    spinner.start()

    services
      .getMovies(res.movieName)
      .then(success)
      .catch(error)
  })
}

module.exports = searchMovies