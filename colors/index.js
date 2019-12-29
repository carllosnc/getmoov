const chalk = require("chalk")

const CyanBold = text => chalk.cyan.bold(text)
const YellowBold = text => chalk.yellow.bold(text)
const Yellow = text => chalk.yellow(text)
const YellowBg = text => chalk.bgYellow.black(text)
const Green = text => chalk.green(text)
const GreenBold = text => chalk.green.bold(text)
const GreenBg = text => chalk.bgGreen.black(text)
const Red = text => chalk.red(text)
const RedBg = text => chalk.bgRed.black(text)
const Err = message => chalk.red.bold(message)

module.exports = {
  CyanBold,
  YellowBold,
  YellowBg,
  Green,
  GreenBold,
  Yellow,
  Red,
  RedBg,
  GreenBg,
  Err
}
