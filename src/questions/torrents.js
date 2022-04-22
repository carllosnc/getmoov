import inquirer from 'inquirer'
import { errorMessage } from '../print/index.js'

const { prompt } = inquirer

export async function selectTorrent(torrentOptions) {
  try {
    const result = await prompt([
      {
        type: 'list',
        name: 'torrent',
        message: 'Torrent quality:',
        choices: torrentOptions,
      },
    ])

    return result.torrent
  } catch (error) {
    errorMessage(error.message)
  }
}
