const {join, resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const stats = {
  assets: false,
  colors: true,
  version: false,
  hash: true,
  timings: true,
  chunks: false,
  chunkModules: false
}

const entry = {
  index: join(__dirname, 'src', 'index.pug')
}

const output = {
  path: resolve(__dirname, 'build'),
  filename: '[name].js'
}

const mod = {
  rules: [
    {
      test: /\.pug$/,
      use: ['html-loader', 'pug-html-loader?pretty&exports=false']
    }
  ]
}

const plugins = [
  new HtmlWebpackPlugin({
    title: 'index.html',
    template: join(__dirname, 'src', 'index.pug')
  })
]

// Config object

const config = {
  stats,
  entry,
  output,
  module: mod,
  plugins
}

module.exports = config
