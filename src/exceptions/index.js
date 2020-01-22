const print = require("../print")

function noResult(list, message){
  if(!list){
    print.errorMessage(`\n  ${message}`)
    print.credits()
    process.exit()
  }
}

module.exports = {
  noResult
}
