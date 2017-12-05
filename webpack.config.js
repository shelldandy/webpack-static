const {join} = require('path')
const {cwd} = require('process')

const SRC = join(cwd(), 'src')
const BUILD = join(cwd(), 'build')

const index = join(SRC, 'index.pug')
const sample = join(SRC, 'sample.pug')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
let extractHtml = new ExtractTextPlugin('[name].html')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const pathsToClean = [BUILD]

module.exports = {
  entry: {
    index,
    sample
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: extractHtml.extract({
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'pug-html-loader',
              options: {
                pretty: true,
                exports: false
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    extractHtml
  ]
}
