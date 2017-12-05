const { SRC } = require('../paths.js')

const pug = {
  test: /\.pug$/,
  use: [
    {
      loader: 'html-loader'
    },
    {
      loader: 'pug-html-loader',
      options: {
        baseDir: SRC,
        data: {
          require
        }
      }
    }
  ]
}

module.exports = pug
