import inquirer from 'inquirer'
import { errorMessage } from '../print/index.js'

const { prompt } = inquirer

export async function searchMovies() {
  try {
    const result = await prompt([
      {
        type: 'input',
        name: 'movieName',
        message: 'Search movie:',
      },
    ])

    return result.movieName
  } catch (error) {
    errorMessage(error.message)
  }
}

export async function selectMovie(list) {
  try {
    const result = await prompt([
      {
        type: 'list',
        name: 'movie',
        message: `Choose the movie (${list.length} results):`,
        choices: list,
        pageSize: 20,
      },
    ])

    return result.movie
  } catch (error) {
    errorMessage(error.message)
  }
}
