import { YellowBold, Green, Yellow } from '../colors/index.js'

export function ytsMoviesList(list) {
  return list.map(movie => {
    return {
      name: `${YellowBold(movie.year)} | ${movie.title}`,
      value: movie,
    }
  })
}

export function ytsTorrents(list) {
  return list.map(torrent => {
    const quality = `${Green(
      `[YTS] Torrent ${torrent.quality} • ${torrent.type}:`
    )}`
    const size = `${Yellow('Size:')} ${torrent.size}`
    const peers = `${Yellow('Peers:')} ${torrent.peers}`
    const seeds = `${Yellow('Seeders:')} ${torrent.seeds}`

    return {
      name: `${quality} ${size} | ${peers} | ${seeds}`,
      value: torrent.url,
    }
  })
}
