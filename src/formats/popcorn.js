const colors = require("../colors")

function popcornMoviesList(list){
  return list.map(movie => {
    return {
      name: `${colors.YellowBold(movie.year)} | ${movie.title}`,
      value: movie,
    }
  })
}

function popcornTorrents(movie) {
  const formatedTorrents = []

  if (movie && movie.torrents) {
    for (const lang in movie.torrents) {
      for (const item in movie.torrents[lang]) {
        const torrent = movie.torrents[lang][item]

        const quality = `${colors.Green(`[POPCORN] Torrent ${item}:`)}`
        const size = `${colors.Yellow("Size:")} ${torrent.filesize}`
        const peers = `${colors.Yellow("Peers:")} ${torrent.peer}`
        const seeds = `${colors.Yellow("Seed:")} ${torrent.seed}`

        formatedTorrents.push({
          name: `${quality} ${size} | ${peers} | ${seeds}`,
          value: torrent.url,
        })
      }
    }
  }

  return formatedTorrents
}

module.exports = {
  popcornMoviesList,
  popcornTorrents
}
