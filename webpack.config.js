const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = process.argv[2] === '-p' || process.argv[2] === '--production';
const staticFiles = path.resolve(__dirname, './app/static');
const sourcePath = path.resolve(__dirname, './app/src');
const buildPath = path.resolve(__dirname, './dist');
const bundleFolder = 'js';

const plugins = [
  new CopyWebpackPlugin([
    {
      from: staticFiles,
      to: buildPath
    }
  ])
];

if (isProd) {
  plugins.push(new CleanWebpackPlugin(buildPath));
}

const config = {
  plugins,
  entry: `${sourcePath}/index.js`,
  output: {
    path: `${buildPath}/${bundleFolder}`,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: sourcePath
      }
    ]
  },
  devServer: {
    contentBase: buildPath,
    publicPath: `/${bundleFolder}/`,
    historyApiFallback: true,
    open: true
  }
};

module.exports = config;
