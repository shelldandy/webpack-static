const moduleImporter = require('sass-module-importer')

module.exports = ({include, exclude, sassOptions} = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: moduleImporter(),
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
})
