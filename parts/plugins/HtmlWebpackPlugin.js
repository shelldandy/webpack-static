const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (
  {
    path = '',
    template = require.resolve(
      'html-webpack-plugin/default_index.ejs'
    ),
    title,
    entry,
    chunks,
    inject
  } = {}
) => ({
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      chunks,
      filename: `${path && path + '/'}index.html`,
      template,
      title,
      inject
    })
  ]
})
