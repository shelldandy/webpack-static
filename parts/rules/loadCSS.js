module.exports = ({include, exclude} = {}) => ({
  test: /\.css$/,
  include,
  exclude,
  use: [
    {
      loader: require.resolve('style-loader')
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        sourceMap: true,
        modules: true
      }
    }
  ]
})
