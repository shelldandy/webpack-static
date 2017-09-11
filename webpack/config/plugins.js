import { join } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { SRC, DIST } from './paths.js'
import glob from 'glob'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'

const pugFiles = glob.sync(SRC + '/*.pug')

const pugPlugins = pugFiles.map(file => {
  const splitted = file.split('/')
  const last = splitted[splitted.length - 1]
  const html = last.split('.pug')[0] + '.html'
  return new HtmlWebpackPlugin({
    filename: join(DIST, html),
    template: file,
    alwaysWriteToDisk: true
  })
})

const plugins = [
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  ...pugPlugins,
  new HtmlWebpackHarddiskPlugin()
]

export default plugins
