const colors = require("../colors")

function popcornMoviesList(list){
  const sortedList = list.sort((x, y) => {
    return y.year - x.year
  })

  return sortedList.map(movie => {
    return {
      name: `${colors.YellowBold(movie.year)} | ${movie.title}`,
      value: movie,
    }
  })
}

function popcornTvShowList(seasons){
  const sortedSeasons = seasons.sort((x, y) => {
    return y.year - x.year
  })

  return sortedSeasons.map(tvshow => {
    const year = colors.YellowBold(tvshow.year)
    const seasons = colors.Yellow(`Seasons: ${tvshow.num_seasons}`)

    return {
      name: `${year} • ${seasons} | ${tvshow.title}`,
      value: tvshow
    }
  })
}

function popcornTvShowEp(episodes){
  const sortedEpisodes = episodes.sort((x, y) => {
    return (x.season - y.season) || (x.episode - y.episode)
  })

  return sortedEpisodes.map(item => {
    const season = colors.Yellow(`Season: ${item.season}`)
    const ep = colors.Yellow(`EP: ${item.episode}`)

    return {
      name: `${season} • ${ep} | ${item.title}`,
      value: item
    }
  })
}

function popcornAnimeEp(episodes){
  const sortedEpisodes = episodes.sort((x, y) => {
    return (x.season - y.season) || (x.episode - y.episode)
  })

  return sortedEpisodes.map(item => {
    const season = colors.Yellow(`Season: ${item.season}`)
    const ep = colors.Yellow(`EP: ${item.episode}`)

    return {
      name: `${season} • ${ep} | ${item.title}`,
      value: item
    }
  })
}

function popcornAnimeList(seasons){
  return seasons.map(anime => {
    const year = colors.YellowBold(anime.year)
    const seasons = colors.YellowBold(`Seasons: ${anime.num_seasons}`)

    return {
      name: `${year} • ${seasons} | ${anime.title}`,
      value: anime
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
          value: torrent.url
        })
      }
    }
  }

  return formatedTorrents
}

function popcornSerieTorrents(tvshow){
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
  popcornSerieTorrents,
  popcornAnimeList,
  popcornAnimeEp
}
