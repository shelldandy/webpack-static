import { join, resolve } from 'path'

const SRC = join(__dirname, '../../src')

const entry = {
  index: join(SRC, 'index.pug')
}

const output = {
  path: resolve(__dirname, '../../build'),
  filename: '[name].js'
}

export {
  entry,
  output,
  SRC
}
