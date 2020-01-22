const inquirer = require("inquirer")
const print = require("../print")

async function movieDetails(list) {
  try {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "movie",
        message: `Choose the movie (${list.length} results):`,
        choices: list,
        pageSize: 20,
      },
    ])

    return result.movie

  } catch (error) {
    print.errorMessage(error.message)
  }
}

module.exports = movieDetails
