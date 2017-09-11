import stats from './config/stats.js'
import devServer from './config/devServer.js'
import  { entry, output } from './config/paths.js'
import module from './config/modules.js'
import plugins from './config/plugins.js'

const config = {
  devServer,
  stats,
  entry,
  output,
  module,
  plugins
}

export default config
