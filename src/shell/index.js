const util = require("util")
const exec = util.promisify(require("child_process").exec)

async function which(pack){
  try {
    const { stdout } = await exec(`which ${pack}`)

    if (stdout){
      return stdout.trim()
    }
  } catch (error) {
    return null
  }
}

async function run(command){
  try {
    return await exec(`${command}`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  which,
  run
}
