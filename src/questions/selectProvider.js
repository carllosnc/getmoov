const inquirer = require("inquirer")
const print = require("../print")

async function selectProvider(){
  try{
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "provider",
        message: "Select the provider:",
        choices: ["YTS"],
      }
    ])

    return result.provider

  }catch(error){
    print.error(error.message)
  }
}

module.exports = selectProvider
