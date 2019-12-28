const inquirer = require("inquirer")
const ora = require("ora")
const services = require("../services")
const print = require("../print")
const spinner = ora("Searching movie...")

async function searchMovies(){
  try {
    const result = await inquirer.prompt([{
      type: "input",
      name: "movieName",
      message: "Search movie:"
    }])

    spinner.start()
    const response = await services.getMovies(result.movieName)
    spinner.stop()

    return response.data.movies

  } catch (error) {
    print.errorMessage(err.message)
  }
}

module.exports = searchMovies