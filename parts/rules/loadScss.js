module.exports = ({include, exclude, sassOptions} = {}) => ({
  test: /\.(scss|sass)$/,
  include,
  exclude,
  use: [
    {
      loader: require.resolve('style-loader')
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        sourceMap: true,
        modules: true
      }
    },
    {
      loader: require.resolve('sass-loader'),
      options: {
        importer: require('sass-module-importer')(),
        sourceMap: true
      }
    }
  ]
})
