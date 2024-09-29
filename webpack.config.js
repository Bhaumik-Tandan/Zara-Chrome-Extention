
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports ={
    mode : 'development',
    devtool: 'cheap-module-source-map',
    entry : {
        popup: path.resolve("src/popup/popup.tsx"),
        contentScript: path.resolve("src/contentScript/contentScript.ts")
    },
    module : {
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new CopyPlugin({
            patterns:[
               {from: path.resolve("src/manifest.json"),to:path.resolve("dist")},
                {from: path.resolve("src/assets/icon.png"),to:path.resolve("dist")},
            ]
        }),
        new HtmlPlugin({
            title: "React Chrome Extension",
            filename: "popup.html",
            chunks: ["popup"]
        })
    ],
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    output : {
        filename: "[name].js"
    },
}