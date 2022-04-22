import chalk from 'chalk'

export const CyanBold = text => chalk.cyan.bold(text)
export const YellowBold = text => chalk.yellow.bold(text)
export const Yellow = text => chalk.yellow(text)
export const YellowBg = text => chalk.bgYellow.black(text)
export const Green = text => chalk.green(text)
export const GreenBold = text => chalk.green.bold(text)
export const GreenBg = text => chalk.bgGreen.black(text)
export const Red = text => chalk.red(text)
export const RedBg = text => chalk.bgRed.black(text)
export const Err = message => chalk.red.bold(message)
