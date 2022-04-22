import inquirer from 'inquirer'
import { errorMessage } from '../print/index.js'

const { prompt } = inquirer

export async function selectProvider() {
  try {
    const result = await prompt([
      {
        type: 'list',
        name: 'provider',
        message: 'Select the provider:',
        choices: ['YTS'],
      },
    ])

    return result.provider
  } catch (error) {
    errorMessage(error.message)
  }
}
