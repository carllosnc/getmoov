const colors = require("../colors")

function ytsMoviesList(list) {
  return list.map(movie => {
    return {
      name: `${colors.YellowBold(movie.year)} | ${movie.title}`,
      value: movie,
    }
  })
}

function ytsTorrents(list) {
  return list.map(torrent => {
    const quality = `${colors.Green(
      `[YTS] Torrent ${torrent.quality} • ${torrent.type}:`
    )}`
    const size = `${colors.Yellow("Size:")} ${torrent.size}`
    const peers = `${colors.Yellow("Peers:")} ${torrent.peers}`
    const seeds = `${colors.Yellow("Seeders:")} ${torrent.seeds}`

    return {
      name: `${quality} ${size} | ${peers} | ${seeds}`,
      value: torrent.url,
    }
  })
}

module.exports = {
  ytsMoviesList,
  ytsTorrents
}
