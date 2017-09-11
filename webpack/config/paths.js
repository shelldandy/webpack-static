import { join, resolve } from 'path'
import glob from 'glob'

const BASE = process.cwd()

const SRC = join(BASE, 'src')
const DIST = resolve(BASE, 'build')

const entry = glob.sync(SRC + '/*.pug')

const output = {
  path: DIST,
  filename: '[name].js'
}

export {
  entry,
  output,
  SRC,
  DIST
}
