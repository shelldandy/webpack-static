import { join, resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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

const module = {
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
  module,
  plugins
}

export default config
