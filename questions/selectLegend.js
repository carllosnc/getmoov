const inquirer = require("inquirer")
const print = require("../print")

async function selectLengend(){
  try {
    const result = await inquirer.prompt([{
      type: "list",
      name: "legend",
      message: "Choose the legend",
      choices: ["primeira", "segunda", "terceira", "quarta"]
    }])

    console.log(result)
  } catch (error) {
    print.errorMessage(error.message)
  }
}

module.exports = selectLengend