const inquirer = require("inquirer")
const ora = require("ora")
const print = require("../print")

async function searchMovies(){
  try {
    const result = await inquirer.prompt([{
      type: "input",
      name: "movieName",
      message: "Search movie:"
    }])

    return result.movieName

  } catch (error) {
    print.errorMessage(err.message)
  }
}

module.exports = searchMovies