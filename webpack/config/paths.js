const { join, resolve } = require('path')
const glob = require('glob')

const BASE = process.cwd()

const SRC = join(BASE, 'src')
const DIST = resolve(BASE, 'build')

const entry = glob.sync(SRC + '/*.pug')

const output = {
  path: DIST,
  filename: '[name].js'
}

exports = {
  entry,
  output,
  SRC,
  DIST
}
