// https://github.com/bhovhannes/svg-url-loader
module.exports = ({include, exclude} = {}) => ({
  test: /\.svg$/,
  include,
  exclude,
  use: [
    {
      loader: require.resolve('svg-url-loader'),
      options: {
        iesafe: true,
        stripdeclarations: true
      }
    }
  ]
})
