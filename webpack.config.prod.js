var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: {
    jsx: './client/index.js',
  },
  output: {
    path: __dirname + '/static',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css'
      },
      {
        test: /\.less/,
        loader: 'style!css!less',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoErrorsPlugin()
    ]
}
