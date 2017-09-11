import { join } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { SRC } from './paths.js'

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'index.html',
    template: join(SRC, 'index.pug')
  }),
  new DashboardPlugin()
]

export default plugins
