import { Err, Green, YellowBold, CyanBold } from '../colors/index.js'

export function message(message) {
  console.log(message)
}

export function errorMessage(message) {
  console.log(Err(message))
}

export function success(message) {
  console.log(Green(message))
}

export function showMovie(movie) {
  console.log('')
  console.log(`  ${YellowBold(movie.year)} • ${CyanBold(movie.title)}`)
  console.log(`  ${Green('Language:')} ${movie.language}`)
  console.log(
    `  ${Green('Trailer:')} https://www.youtube.com/watch?v=${
      movie.yt_trailer_code
    }`
  )
  console.log(`  ${Green('Cover:')} ${movie.large_cover_image}`)
  console.log('')
}

export function logo() {
  console.log(`
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  GETMOOV V1.0.1
  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  `)
}
