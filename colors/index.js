const chalk = require("chalk")

const CyanBold = text => chalk.cyan.bold(text)
const YellowBold = text => chalk.yellow.bold(text)
const Green = text => chalk.green.bold(text)
const Yellow = text => chalk.yellow(text)
const Red = text => chalk.red(text)
const GreenBg = text => chalk.bgGreen.black(text)
const Err = message => chalk.red.bold(message)

module.exports = {
  CyanBold,
  YellowBold,
  Green,
  Yellow,
  Red,
  GreenBg,
  Err
}
