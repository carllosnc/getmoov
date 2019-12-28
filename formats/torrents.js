const colors = require("../colors")
const shell = require("shelljs")

function ytsTorrents(list){
  return list.map(torrent => {
    const quality = `${colors.Green(`[YTS] Torrent ${torrent.quality} • ${torrent.type}:`)}`
    const size = `${colors.Yellow("Size:")} ${torrent.size}`
    const peers = `${colors.Yellow("Peers:")} ${torrent.peers}`
    const seeds = `${colors.Yellow("Seeders:")} ${torrent.seeds}`

    return {
      name: `${quality} ${size} | ${peers} | ${seeds}`,
      value: torrent.url
    }
  })
}

function popcornTorrents(movie){
  const formatedTorrents = []

  if(movie && movie.torrents){
    for (const lang in movie.torrents) {
      for(const item in movie.torrents[lang]){
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

function torrentClientOptions(){
  const options = [{
    name: "Print Link",
    value: "print"
  }]

  if(shell.which("qbittorrent")){
    options.push({
      name: "QBitTorrent",
      value: "qbittorrent"
    })
  }

  return options
}

module.exports = {
  ytsTorrents,
  popcornTorrents,
  torrentClientOptions
}
