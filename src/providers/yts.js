import {
  searchMovies,
  selectMovie,
  selectTorrent,
  selectSubtitle,
} from '../questions/index.js'

import {
  ytsMoviesList,
  ytsTorrents,
  torrentLink,
  subtitleLink,
} from '../formats/index.js'

import { getYtsMovies, getSubtitles } from '../services/index.js'

import { errorMessage, showMovie, message } from '../print/index.js'

import { filterSubtitles } from '../crawlers/index.js'

import ora from 'ora'

const loadingSearch = ora('Searching movie...')
const loadingSubtitles = ora('Searching subtitles...')

export async function yts(afterAll) {
  const searchName = await searchMovies()

  loadingSearch.start()
  const movies = await getYtsMovies(searchName)
  loadingSearch.stop()

  if (!movies) {
    errorMessage('\n  No Movies found')
    afterAll()
    return false
  }

  const movie = await selectMovie(ytsMoviesList(movies))

  showMovie(movie)

  const torrentQuality = await selectTorrent(ytsTorrents(movie.torrents))

  message(torrentLink(torrentQuality))

  loadingSubtitles.start()
  const subtitle = await getSubtitles(movie.imdb_code)
  loadingSubtitles.stop()

  const filteredSubtitles = filterSubtitles(subtitle)

  if (!filteredSubtitles.length) {
    errorMessage('  No subtitle found')
    afterAll()
    return false
  }

  const selectedSubtitle = await selectSubtitle(filteredSubtitles)

  message(subtitleLink(selectedSubtitle))

  afterAll()
}
