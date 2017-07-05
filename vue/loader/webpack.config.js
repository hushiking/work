const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './main2.js',

  output: {
    path: __dirname,
    // path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test:/\.vue$/, loader: 'vue-loader'},
      {test:/\.js$/, loader: 'babel-loader', exclude: /node_modules/, options:{presets: ['es2015'], plugins: ['transform-runtime']}}
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8088
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}