const { join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { SRC, DIST } = require('./paths.js')
const glob = require('glob')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

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

module.exports = plugins
