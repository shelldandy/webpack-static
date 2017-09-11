const module = {
  rules: [
    {
      test: /\.pug$/,
      use: ['html-loader', 'pug-html-loader']
    }
  ]
}

export default module
