const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/Index.tsx',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.(jpg|jpeg|png|svg)$/,
          use: {
           loader: 'url-loader'
          }
        }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js','.png'],
  },
  plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/assets', to: 'dist' },
          { from: 'src/assets', to: 'build' },
        ],
      }),
  ]
}