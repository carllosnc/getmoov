import { load } from 'cheerio'
import { YIFY_SUBS_DOWNLOAD } from '../values/index.js'

export function filterSubtitles(content) {
  const $ = load(content)
  const subs = []

  $('.other-subs tr').each(function (index, item) {
    const element = $(item)

    const rating = element.find('.rating-cell > .label').text()
    const lang = element.find('.sub-lang').text()
    const link = element.find('.flag-cell').next().find('a').attr('href')
    const name = element.find('.flag-cell').next().find('a').text()

    if (rating && lang && link && name) {
      const fileName = link.replace('/subtitles/', '').trim()
      const formatedLink = `${YIFY_SUBS_DOWNLOAD}/${fileName}.zip`
      const formatedName = name.replace('subtitle', '').trim()

      subs.push({
        rating: rating,
        lang: lang,
        link: formatedLink,
        name: formatedName,
      })
    }
  })

  return subs
}
