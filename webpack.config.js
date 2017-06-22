const path = require("path");

module.exports = {
    entry: {
        "aplicacao": "./src/index.js"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "aplicacao.js"
    },
    devServer: {
        port: 8000,
        proxy: {
            "/api/**": {
                target: "http://localhost:3000/",
                logLevel: "info",
                pathRewrite: { "^/api": "" }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};