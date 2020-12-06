const colors = require("../colors")

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

function subtitleLink(torrent) {
  return `\n  ${colors.GreenBg(" SUBTITLE LINK: ")} ${torrent}`
}

module.exports = {
  yifySubtitle,
  subtitleLink
}
