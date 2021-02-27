const print = require("./src/print")
const providers = require("./src/providers")

async function app() {
  print.logo()

  providers.yts(() => {
    app()
  })
}

app()
