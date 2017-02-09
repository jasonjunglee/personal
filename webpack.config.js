module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
    test:/\.scss$/,
    loaders:['style', 'css', 'sass']
  }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
