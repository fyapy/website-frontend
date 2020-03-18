const path = require('path')
const webpack = require('webpack')
const { parsed: localEnv } = require('dotenv').config()

module.exports = {
    webpack(config, { dev }) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        config.resolve.modules.push(path.resolve(__dirname, 'src'))

        if (dev) {
            config.module.rules.push({
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    cache: false,
                    fix: false,
                    emitWarning: true,
                    emitError: true,
                    failOnWarning: true,
                    failOnError: true,
                },
            })
        }

        return config
    },
}
