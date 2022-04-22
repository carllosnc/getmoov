#!/usr/bin/env node

import { logo } from './src/print/index.js'
import { yts } from './src/providers/index.js'

async function app() {
  logo()

  yts(() => {
    app()
  })
}

app()
