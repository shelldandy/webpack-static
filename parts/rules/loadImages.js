module.exports = ({ include, exclude, options } = {}) => ({
  test: /\.(jpg|jpeg|png|svg|gif)$/,
  include,
  exclude,
  use: [
    {
      loader: require.resolve('url-loader'),
      options
    }
  ]
})
