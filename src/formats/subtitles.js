const colors = require("../colors")
const shell = require("../shell")

function ratingSub(rating) {
  const value = Number(rating)

  if (value > 0) {
    return colors.GreenBg(` ${value} `)
  }

  if (value < 0) {
    return colors.RedBg(` ${value} `)
  }

  return colors.YellowBg(` ${value} `)
}

function yifySubtitle(torrentList) {
  return torrentList.map(legend => {
    const lang = colors.Green(`${legend.lang.toUpperCase()}`)
    const name = legend.name

    return {
      name: `${ratingSub(legend.rating)} • ${lang} | ${name}`,
      value: legend.link,
    }
  })
}

function subtitleClients() {
  const clients = [
    {
      name: "Print Link",
      value: "print",
    },
  ]

  if (shell.which("firefox")) {
    clients.push({
      name: "Firefox",
      value: "firefox",
    })
  }

  if (shell.which("wget")) {
    clients.push({
      name: "WGet",
      value: "wget",
    })
  }

  return clients
}

function subtitleLink(torrent) {
  return `\n  ${colors.GreenBg(" SUBTITLE LINK: ")} ${torrent} \n`
}

module.exports = {
  yifySubtitle,
  subtitleClients,
  subtitleLink
}
