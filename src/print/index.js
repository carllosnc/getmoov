const colors = require("../colors")

function errorMessage(message) {
  console.log(colors.Err(`${message}`))
}

function successMessage(message) {
  console.log(colors.GreenBold(`${message}`))
}

function movie(movie) {
  console.log("")
  console.log(`  ${colors.YellowBold(movie.year)} • ${colors.CyanBold(movie.title)}`)
  console.log(`  ${colors.Green("language:")} ${movie.language}`)
  console.log(`  ${colors.Green("Trailer:")} https://www.youtube.com/watch?v=${movie.yt_trailer_code}`)
  console.log(`  ${colors.Green("Cover:")} ${movie.large_cover_image}`)
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
  console.log(`\n  Getmoov | designed and coded with ${colors.Red("♥")} \n`)
}

function torrentLink(torrent) {
  console.log(`\n  ${colors.GreenBg(" TORRENT LINK: ")} ${torrent} \n`)
}

function subtitleLink(torrent) {
  console.log(`\n  ${colors.GreenBg(" SUBTITLE LINK: ")} ${torrent}`)
}

module.exports = {
  errorMessage,
  successMessage,
  torrentLink,
  subtitleLink,
  movie,
  credits,
  logo,
}
