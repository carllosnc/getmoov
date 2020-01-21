const colors = require("../colors")

function popcornMoviesList(list){
  return list.map(movie => {
    return {
      name: `${colors.YellowBold(movie.year)} | ${movie.title}`,
      value: movie,
    }
  })
}

function popcornTvShowList(list){
  return list.map(tvshow => {
    const year = colors.YellowBold(tvshow.year)
    const sessions = colors.Yellow(`Sessions: ${tvshow.num_seasons}`)

    return {
      name: `${year} • ${sessions} | ${tvshow.title}`,
      value: tvshow
    }
  })
}

function popcornTvShowEp(list){
  return list.map(episode => {
    const season = colors.Yellow(`Season: ${episode.season}`)
    const ep = colors.Yellow(`EP: ${episode.episode}`)

    return {
      name: `${season} • ${ep} | ${episode.title}`,
      value: episode
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

function popcornTvShowTorrent(tvshow){
  const formatedTorrents = []

  if(tvshow && tvshow.torrents){
    for(const item in tvshow.torrents){
      const torrent = tvshow.torrents[item]

      const quality = `${colors.Green(`[POPCORN] Torrent ${item}:`)}`
      const seeds = `${colors.Yellow("Seeds:")} ${torrent.seeds}`
      const peers = `${colors.Yellow("Peers:")} ${torrent.peers}`
      const provider = `${colors.Yellow("Provider:")} ${torrent.provider}`

      formatedTorrents.push({
        name: `${quality} | ${provider} | ${peers} | ${seeds}`,
        value: torrent.url
      })
    }
  }

  return formatedTorrents
}

module.exports = {
  popcornMoviesList,
  popcornTvShowList,
  popcornTvShowEp,
  popcornTorrents,
  popcornTvShowTorrent
}
