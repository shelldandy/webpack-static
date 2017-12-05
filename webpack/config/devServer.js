const { DIST } = require('./paths.js')

const devServer = {
  hot: true,
  inline: true,
  contentBase: DIST,
  staticOptions: {
    extensions: ['html']
  }
}

module.exports = devServer
