const {join} = require('path')
const {cwd} = require('process')

const SRC = join(cwd(), 'src')
const BUILD = join(cwd(), 'src')

const index = join(SRC, 'index.pug')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: index,
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  module: {
    // your modules...
    rules: [
      {
        test: /\.pug$/,
        loaders: ['pug-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template-pug'),
      // template: '!!pug-loader!node_modules/html-webpack-template-pug/layout.pug'

      // Optional
      appMountId: 'app',
      // appMountId: ['app1', 'app2']
      mobile: true,
      injectExtras: {
        head: [
          'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css',
          {
            tag: 'link',
            rel: 'dns-prefetch',
            href: '//example.com/'
          },
          {
            tag: 'base',
            href: '../assets/page.html'
          },
          {
            tag: 'meta',
            name: 'description',
            content: 'A description of the page'
          }
        ],
        body: [
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',
          {
            tag: 'noscript',
            innerHTML: "JavaScript is disabled in your browser. <a href='http://www.enable-javascript.com/' target='_blank'>Here</a> is how to enable it."
          }
        ]
      },
      title: 'My App'
      // Other html-webpack-plugin options...
    })
  ]
}
