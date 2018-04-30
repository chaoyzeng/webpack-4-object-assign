module.exports = {
    entry: {
        'test': [`./src/entry.js`],
    },

    output: {
        path: `${__dirname}/../build`,
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: ['node_modules', './src'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /(node_modules|vendor|lib|\.soy\.js)/,
                include: ['./src'],
            },
        ],
    },
};
