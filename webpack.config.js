const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./config/webpack.config');

const webpackEnvConfig =
    process.env.NODE_ENV === 'production'
        ? require('./config/webpack.config.prod')
        : require('./config/webpack.config.dev');

module.exports = webpackMerge(baseWebpackConfig, webpackEnvConfig);
