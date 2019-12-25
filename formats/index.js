const movieFormats = require("./movies")
const errorFormats = require("./errors")

module.exports = {
  ...movieFormats,
  ...errorFormats
}
