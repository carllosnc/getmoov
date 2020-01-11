const colors = require("../colors")

function popcornMoviesList(list){
  return list.map(movie => {
    return {
      name: `${colors.YellowBold(movie.year)} | ${movie.title}`,
      value: movie,
    }
  })
}

module.exports = {
  popcornMoviesList
}
