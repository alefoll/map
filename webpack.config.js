const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename : "app.min.js",
        path     : path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
            test    : /\.tsx?$/,
            use     : "ts-loader",
            exclude : /node_modules/
        }, {
            test: /\.html$/,
            use: [{
                loader  : "file-loader",
                options : {
                    name: "[name].[ext]"
                }
            }]
        }, {
            test    : /\.css$/,
            use     : [MiniCssExtractPlugin.loader, "css-loader"],
            exclude : /node_modules/
        }, {
            test    : /\.css$/,
            include : /node_modules/,
            use     : [{
                loader  : "file-loader",
                options : {
                    name: "[name].[ext]"
                }
            }]
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        host             : "0.0.0.0",
        port             : 3000,
        disableHostCheck : true,
        staticOptions    : {
            extensions: ["html"]
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    mode: "development"
};