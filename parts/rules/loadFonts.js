module.exports = ({ include, exclude, options } = {}) => ({
  test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  include,
  exclude,
  use: {
    loader: require.resolve('file-loader'),
    options
  }
})
