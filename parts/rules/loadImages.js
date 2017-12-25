module.exports = ({ include, exclude, options } = {}) => ({
  test: /\.(png|gif)$/,
  include,
  exclude,
  use: [
    {
      loader: require.resolve('url-loader'),
      options
    }
  ]
})
