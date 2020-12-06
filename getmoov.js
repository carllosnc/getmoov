const questions = require("./src/questions")
const print = require("./src/print")
const providers = require("./src/providers")

async function app() {
  print.logo()

  const provider = await questions.selectProvider()

  if(provider === "YTS"){
    providers.yts(() => {
      app()
    })
  }
}

app()
