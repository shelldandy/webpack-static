module.exports = ({include, exclude} = {}) => ({
  test: /\.(js|jsx|mjs)$/,
  include,
  exclude,
  use: {
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      presets: [require.resolve('babel-preset-timmy')],
      cacheDirectory: true
    }
  }
})
