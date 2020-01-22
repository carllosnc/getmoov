const questions = require("./src/questions")
const print = require("./src/print")
const providers = require("./src/providers")

print.logo()

async function app() {
  const providerName = await questions.selectProvider()

  if(providerName === "YTS"){
    providers.yts()
  }

  if(providerName === "Popcorn Time"){
    providers.popcorn()
  }
}

app()
