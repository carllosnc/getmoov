const questions = require("./src/questions")
const print = require("./src/print")
const providers = require("./src/providers")

print.logo()

async function app() {
  const provider = await questions.selectProvider()

  if(provider === "YTS"){
    providers.yts()
  }

  if(provider === "Popcorn Time"){
    providers.popcorn()
  }
}

app()
