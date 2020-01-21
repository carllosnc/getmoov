const questions = require("../questions")
const popcornMovies = require("./popcorn.movie")
const popcornTvShow = require("./popcorn.tvshows")

async function popcorn(){
  const mediaType = await questions.selectMediaType()

  if(mediaType === "Movies"){
    popcornMovies()
  }

  if(mediaType === "TV Shows"){
    popcornTvShow()
  }
}

module.exports = {
  popcorn
}
