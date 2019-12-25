const chalk = require("chalk")

const Err = message => chalk.red.bold(message)

function errorMessage(message){
  console.log(Err(`  ${message}`))
}

function noResultFound(){
  console.log(Err(`  No result found`))
}

module.exports = {
  noResultFound,
  errorMessage
}
