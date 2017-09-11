import { join } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { SRC, DIST } from './paths.js'
import glob from 'glob'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'

const pugFiles = glob.sync(SRC + '/*.pug')

const pugPlugins = pugFiles.map(file => new HtmlWebpackPlugin({
  filename: file.split('.pug')[0] + '.html',
  template: file
}))

const plugins = [
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  ...pugPlugins,
  new HtmlWebpackHarddiskPlugin({
    outputPath: DIST
  })
]

export default plugins
