const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/Index.tsx',
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