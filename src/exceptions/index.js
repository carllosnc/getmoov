const print = require("../print")

function noResult(list, message){
  if(!list){
    print.error(`\n  ${message} \n`)
    print.credits()
    process.exit()
  }
}

module.exports = {
  noResult
}
