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

  movieDetails(
    searchMovies,
    formats.formatMovieList(movies)
  )
}

async function searchMovies(){
  try {
    const result = await inquirer.prompt([{
      type: "input",
      name: "movieName",
      message: "Search movie:"
    }])

    spinner.start()
    const response = await services.getMovies(result.movieName)
    success(response)

  } catch (error) {
    formats.errorMessage(err.message)
  }
}

module.exports = searchMovies