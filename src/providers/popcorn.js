const questions = require("../questions")
const popcornMovies = require("./popcorn.movie")

async function popcorn(){
  const mediaType = await questions.selectMediaType()

  if(mediaType === "Movies"){
    popcornMovies()
  }
}

module.exports = {
  popcorn
}
