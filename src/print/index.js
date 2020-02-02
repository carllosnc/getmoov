const colors = require("../colors")

function message(message){
  console.log(message)
}

function error(message){
  console.log(colors.Err(message))
}

function success(message){
  console.log(colors.Green(message))
}

function movie(movie) {
  console.log("")
  console.log(`  ${colors.YellowBold(movie.year)} • ${colors.CyanBold(movie.title)}`)
  console.log(`  ${colors.Green("Language:")} ${movie.language}`)
  console.log(`  ${colors.Green("Trailer:")} https://www.youtube.com/watch?v=${movie.yt_trailer_code}`)
  console.log(`  ${colors.Green("Cover:")} ${movie.large_cover_image}`)
  console.log("")
}

function popcornMovie(movie){
  console.log("")
  console.log(`  ${colors.YellowBold(movie.year)} • ${colors.CyanBold(movie.title)}`)
  console.log(`  ${colors.Green("Trailer:")} ${movie.trailer}`)
  console.log(`  ${colors.Green("Cover:")} ${movie.images.poster}`)
  console.log("")
}

function popcornTvShow(tvshow){
  console.log("")
  console.log(` ${colors.YellowBold(tvshow.year)} • ${colors.CyanBold(tvshow.title)}`)
  console.log(` ${colors.Green("Cover:")} ${tvshow.images.poster}`)
  console.log(` ${colors.Green("Sessions:")} ${tvshow.num_seasons}`)
  console.log("")
}

function logo() {
  console.log(`
  ▄▄▄▄▄▄▄
  Getmoov
  ▀▀▀▀▀▀▀
  `)
}

function credits() {
  console.log(`  Getmoov | designed and coded with ${colors.Red("♥")} \n`)
}

module.exports = {
  message,
  movie,
  popcornMovie,
  popcornTvShow,
  credits,
  logo,
  error,
  success
}
