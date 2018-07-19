var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SpinnyText.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SpinnyText.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
