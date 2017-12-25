module.exports = ({ include, exclude, options } = {}) => ({
  test: /\.(png|jpg|svg)$/,
  include,
  exclude,
  use: {
    loader: require.resolve('url-loader'),
    options
  }
})
