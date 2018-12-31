const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map';
  }

  return false;
}

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: './[name].js'
  },
  devtool: getDevTool(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin([
      { from: 'robots.txt', to: '.' },
      { from: 'index.html', to: '.' },
    ], { copyUnmodified: true })
  ]
};
