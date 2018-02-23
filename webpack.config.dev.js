const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const nodeModules = {};

const PATHS = {
  server: path.join(__dirname, 'server'),
  build: path.join(__dirname, 'build'),
};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = `commonjs ${mod}`); // eslint-disable-line no-return-assign

const commonConfig = merge([
  {
    entry: {
      server: PATHS.server,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    resolve: {
      alias: {
        theme: path.resolve(__dirname, 'app/theme'),
        pages: path.resolve(__dirname, 'app/pages/'),
        actions: path.resolve(__dirname, 'app/actions/'),
        reducers: path.resolve(__dirname, 'app/reducers/'),
        components: path.resolve(__dirname, 'app/components/'),
      },
      extensions: ['.js', '.jsx'],
    },
    node: {
      __dirname: false,
    },
    target: 'node',
    externals: nodeModules,
  },
  parts.loadJavaScript({ include: PATHS.app }),
]);

module.exports = commonConfig;
