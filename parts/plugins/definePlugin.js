const webpack = require('webpack')

module.exports = definitions => ({
  plugins: [new webpack.DefinePlugin(definitions)]
})
