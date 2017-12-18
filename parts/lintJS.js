module.exports = ({include, exclude} = {}) => ({
  test: /\.(js|jsx)$/,
  enforce: 'pre',
  include,
  exclude,
  use: [
    {
      loader: require.resolve('eslint-loader'),
      options: {
        eslintPath: require.resolve('eslint'),
        baseConfig: {
          extends: [
            require.resolve('eslint-config-pixel2html')
          ]
        }
      }
    }
  ]
})
