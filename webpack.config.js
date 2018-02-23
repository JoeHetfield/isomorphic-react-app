const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    resolve: {
      alias: {
        theme: path.resolve(__dirname, 'app/theme'),
        utils: path.resolve(__dirname, 'app/utils/'),
        pages: path.resolve(__dirname, 'app/pages/'),
        config: path.resolve(__dirname, 'app/config'),
        actions: path.resolve(__dirname, 'app/actions/'),
        reducers: path.resolve(__dirname, 'app/reducers/'),
        components: path.resolve(__dirname, 'app/components/'),
      },
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: HtmlWebpackTemplate,
        title: 'Newex',
        appMountId: 'app',
        baseHref: '/',
      }),
    ],
  },
  parts.loadJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadImages(),
  {
    output: {
      devtoolModuleFilenameTemplate:
        'webpack:///[absolute-resource-path]',
    },
  },
  parts.generateSourceMaps({
    type: 'cheap-module-eval-source-map',
  }),
]);

module.exports = env => (env === 'production'
  ? merge(commonConfig, productionConfig)
  : merge(commonConfig, developmentConfig));
