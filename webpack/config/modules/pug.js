import { SRC } from '../paths.js'

const pug = {
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

export default pug
