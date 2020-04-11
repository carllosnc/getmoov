const questions = require("../questions")
const popcornMovies = require("./popcorn.movie")
const popcornTvShow = require("./popcorn.tvshows")
const popcornAnime = require("./popcorn.anime")

async function popcorn(){
  const mediaType = await questions.selectMediaType()

  if(mediaType === "Movies"){
    popcornMovies()
  }

  if(mediaType === "TV Shows"){
    popcornTvShow()
  }

  if(mediaType === "Animes"){
    popcornAnime()
  }
}

module.exports = {
  popcorn
}
