import { DIST } from './paths.js'

const devServer = {
  hot: true,
  inline: true,
  contentBase: DIST,
  staticOptions: {
    extensions: ['html']
  }
}

export default devServer
