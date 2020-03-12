const path = require('path')

module.exports = {
    webpack(config) {
        config.resolve.modules.push(path.resolve(__dirname, 'src'))

        config.module.rules.push(...[
            {
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
            }
        ])

        return config
    },
}
