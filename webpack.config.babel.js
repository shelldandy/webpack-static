import { join, resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'

const devServer = {
  hot: true,
  inline: true
}

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
      use: ['html-loader', 'pug-html-loader']
    }
  ]
}

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'index.html',
    template: join(__dirname, 'src', 'index.pug')
  }),
  new DashboardPlugin()
]

// Config object

const config = {
  devServer,
  stats,
  entry,
  output,
  module,
  plugins
}

export default config
