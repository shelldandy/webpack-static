const scss = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        modules: true
      }
    },
    {
      loader: 'sass-loader'
    }
  ]
}

module.exports = scss
