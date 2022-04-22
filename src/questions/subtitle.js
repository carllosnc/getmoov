import inquirer from 'inquirer'
import { errorMessage } from '../print/index.js'
import { yifySubtitle } from '../formats/index.js'

const { prompt } = inquirer

export async function selectSubtitle(legends) {
  try {
    const result = await prompt([
      {
        type: 'list',
        name: 'legend',
        message: 'Select Subtitle:',
        pageSize: 20,
        choices: yifySubtitle(legends),
      },
    ])

    return result.legend
  } catch (error) {
    errorMessage(error.message)
  }
}
