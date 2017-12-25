module.exports = ({ include, exclude, lqipOptions, urlOptions } = {}) => ({
  test: /\.(jpg|jpeg)$/,
  include,
  exclude,
  use: [
    {
      loader: require.resolve('lqip-loader'),
      lqipOptions
    },
    {
      loader: require.resolve('url-loader'),
      urlOptions
    }
  ]
})
