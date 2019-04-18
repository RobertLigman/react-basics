var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path:DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    mode:'none',
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query:{
                    presets:["@babel/preset-env","@babel/preset-react"]
                }
            },
            
            {
                test:/\.css?/,
                include:SRC_DIR,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              }

                
        ]
    }
};
module.exports = config;