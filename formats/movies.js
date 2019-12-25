const chalk = require("chalk")

const CyanBold = title => chalk.cyan.bold(title)
const YellowBold = date => chalk.yellow.bold(date)
const Green = info => chalk.green.bold(info)
const Yellow = detail => chalk.yellow(detail)
const Cyan = link => chalk.cyan(link)
const Red = text => chalk.red(text)
const RedBg = text => chalk.bgGreen.black(text)

function formatMovieList(list){
  return list.map(movie => {
    return {
      name: `${YellowBold(movie.year)} | ${movie.title}`,
      value: movie
    }
  })
}

function formatYtsTorrents(list){
  return list.map(torrent => {
    const quality = `${Green(`[YTS] Torrent ${torrent.quality} • ${torrent.type}:`)}`
    const size = `${Yellow("Size:")} ${torrent.size}`
    const peers = `${Yellow("Peers:")} ${torrent.peers}`
    const seeds = `${Yellow("Seeders:")} ${torrent.seeds}`

    return {
      name: `${quality} ${size} | ${peers} | ${seeds}`,
      value: torrent.url
    }
  })
}

function formatPopcornTorrents(movie){
  const formatedTorrents = []

  if(movie && movie.torrents){
    for (const lang in movie.torrents) {
      for(const item in movie.torrents[lang]){
        const torrent = movie.torrents[lang][item]

        const quality = `${Green(`[POPCORN] Torrent ${item}:`)}`
        const size = `${Yellow("Size:")} ${torrent.filesize}`
        const peers = `${Yellow("Peers:")} ${torrent.peer}`
        const seeds = `${Yellow("Seed:")} ${torrent.seed}`

        formatedTorrents.push({
          name: `${quality} ${size} | ${peers} | ${seeds}`,
          value: torrent.url
        })
      }
    }
  }

  return formatedTorrents
}

function formatMovie(movie){
  console.log(``)
  console.log(`  ${YellowBold(movie.year)} • ${CyanBold(movie.title)} `)
  console.log(`  ${Green("language:")} ${movie.language} `)
  console.log(`  ${Green("Trailer:")} https://www.youtube.com/watch?v=${movie.yt_trailer_code} `)
  console.log(`  ${Green("Cover:")} ${movie.large_cover_image} `)
  console.log(``)
}

function formatLogo(){
  console.log(`
  ▄▄▄▄▄▄▄
  Getmoov
  ▀▀▀▀▀▀▀
  `)
}

function formatCredits(){
  console.log(`\n  Getmoov | designed and coded with ${Red("♥")} \n`)
}

function formatTorrentLink(torrent){
  console.log(``)
  console.log(`  For a better experience download the qbittorrent.`)
  console.log(`  ${Cyan("https://www.qbittorrent.org/download.php")}`)
  console.log(``)
  console.log(`  ${RedBg(` TORRENT LINK: `)} ${torrent}`)
  formatCredits()
}

module.exports = {
  formatMovieList,
  formatYtsTorrents,
  formatPopcornTorrents,
  formatTorrentLink,
  formatMovie,
  formatCredits,
  formatLogo
}
