module.exports = ({include, exclude} = {}) => ({
  test: /\.(js|jsx|mjs)$/,
  include,
  exclude,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['timmy']
    }
  }
})
