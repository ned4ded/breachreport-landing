import gulp from 'gulp';
import config from '../gulpfile.config';
import path from 'path';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';

let wpConfig = {
  mode: 'production',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|lib)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery/dist/jquery.min',
      jQuery: 'jquery/dist/jquery.min',
      Popper: 'popper.js/dist/popper.min'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /([\\/]node_modules[\\/]|[\\/]lib[\\/])/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
  }
}

export function scripts() {
  return gulp.src(config.paths.scripts)
    .pipe(webpackStream(wpConfig))
    .pipe(gulp.dest(path.join(config.server.dest, 'js')));
}
