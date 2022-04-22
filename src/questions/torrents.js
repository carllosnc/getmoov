const inquirer = require('inquirer')
const print = require('../print')

async function selectTorrent(torrentOptions) {
  try {
    const result = await inquirer.prompt([
      {
        type: 'list',
        name: 'torrent',
        message: 'Torrent quality:',
        choices: torrentOptions,
      },
    ])

    return result.torrent
  } catch (error) {
    print.error(error.message)
  }
}

module.exports = {
  selectTorrent,
}
