var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: 'http://localhost:8080/public/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src/client'),
    compress: true,
    port: 8080,
  },
  plugins: [
    new webpack.ProvidePlugin({
        'React':     'react',
        'classnames':     'classnames',
    })
  ],
  module : {
      loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader: ['babel-loader'],
      },
      {
        test : /\.scss?/,
        include : APP_DIR,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
     components: './components'
    },
// this does not work
//    modules: [
//      path.resolve(APP_DIR),
//      path.resolve('./node_modules'),
//    ],
  }
};

module.exports = config;
