import { join } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { SRC, DIST } from './paths.js'
import glob from 'glob'

const pugFiles = glob.sync(SRC + '/*.pug')

const pugPlugins = pugFiles.map(file => {
  const html = file.split('.pug')[0] + '.html'
  return new HtmlWebpackPlugin({
    filename: html,
    template: file
  })
})

const plugins = [
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  ...pugPlugins
]

export default plugins
