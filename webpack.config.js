const {join} = require('path')
const {cwd} = require('process')

const SRC = join(cwd(), 'src')
const BUILD = join(cwd(), 'build')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractHtml = new ExtractTextPlugin('[name].html')

module.exports = {
  entry: [
    SRC
  ],
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    extractHtml
  ]
}
