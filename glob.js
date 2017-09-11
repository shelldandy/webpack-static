const glob = require('glob')
const path = require('path')

const BASE = process.cwd()
const SRC = path.join(BASE, 'src')
const DIST = path.join(BASE, 'build')
const pugFiles = glob.sync(SRC + '/*.pug')

pugFiles.map(file => {
  const splitted = file.split('/')
  const last = splitted[splitted.length - 1]
  console.log(last)
})
