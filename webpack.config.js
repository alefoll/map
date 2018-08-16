const path = require("path");

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path     : path.resolve(__dirname, "./build"),
        filename : "js/[name].min.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                }
            }]
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "assets/[name].[ext]",
                }
            }]
        }]
    },
    mode: "development"
}