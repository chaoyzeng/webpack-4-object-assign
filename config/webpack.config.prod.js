const webpack = require('webpack');

module.exports = {
    mode: 'production',

    output: {
        filename: '[name].bundle.[chunkhash].js',
        chunkFilename: '[name].chunk.[chunkhash]_[localeString].js',
    },
};
