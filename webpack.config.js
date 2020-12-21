module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js',
    library: 'myApp'
  },
  resolve: {
    fallback: {
      fs: false
    }
  }
};