const webpack = require('webpack');

module.exports = {
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk_[localeString].js',
    },
};
