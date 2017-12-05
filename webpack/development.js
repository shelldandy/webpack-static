const stats = require('./config/stats')
const devServer = require('./config/devServer')
const { entry, output } = require('./config/paths')
const mod = require('./config/modules')
const plugins = require('./config/plugins')

const config = {
  devServer,
  stats,
  entry,
  output,
  module: mod,
  plugins
}

module.exports = config
