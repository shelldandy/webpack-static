const {join} = require('path')
const {cwd} = require('process')

const SRC = join(cwd(), 'src')
const BUILD = join(cwd(), 'build')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractHtml = new ExtractTextPlugin('[name].html')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const pathsToClean = [BUILD]

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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['timmy']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    extractHtml
  ]
}
