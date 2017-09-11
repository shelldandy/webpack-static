import { SRC } from './paths.js'

const module = {
  rules: [
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.pug$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'pug-html-loader',
          options: {
            baseDir: SRC,
            data: {
              require
            }
          }
        }
      ]
    }
  ]
}

export default module
