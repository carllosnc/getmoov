const colors = require('../colors')

function message(message) {
  console.log(message)
}

function error(message) {
  console.log(colors.Err(message))
}

function success(message) {
  console.log(colors.Green(message))
}

function movie(movie) {
  console.log('')
  console.log(
    `  ${colors.YellowBold(movie.year)} • ${colors.CyanBold(movie.title)}`
  )
  console.log(`  ${colors.Green('Language:')} ${movie.language}`)
  console.log(
    `  ${colors.Green('Trailer:')} https://www.youtube.com/watch?v=${
      movie.yt_trailer_code
    }`
  )
  console.log(`  ${colors.Green('Cover:')} ${movie.large_cover_image}`)
  console.log('')
}

function popcornMovie(movie) {
  console.log('')
  console.log(
    `  ${colors.YellowBold(movie.year)} • ${colors.CyanBold(movie.title)}`
  )
  console.log(`  ${colors.Green('Trailer:')} ${movie.trailer}`)
  console.log(`  ${colors.Green('Cover:')} ${movie.images.poster}`)
  console.log('')
}

function popcornTvShow(tvshow) {
  console.log('')
  console.log(
    ` ${colors.YellowBold(tvshow.year)} • ${colors.CyanBold(tvshow.title)}`
  )
  console.log(` ${colors.Green('Cover:')} ${tvshow.images.poster}`)
  console.log(` ${colors.Green('Sessions:')} ${tvshow.num_seasons}`)
  console.log('')
}

function popcornAnime(anime) {
  console.log()
  console.log(
    ` ${colors.YellowBold(anime.year)} • ${colors.CyanBold(anime.title)}`
  )
  console.log(` ${colors.Green('Cover:')} ${anime.images.poster}`)
  console.log(` ${colors.Green('Sessions:')} ${anime.num_seasons}`)
  console.log('')
}

function logo() {
  console.log(`
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  GETMOOV V1.0.1
  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  `)
}

module.exports = {
  message,
  movie,
  popcornMovie,
  popcornTvShow,
  popcornAnime,
  logo,
  error,
  success,
}
