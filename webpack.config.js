
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports ={
    mode : 'development',
    entry : './src/test.tsx',
    module : {
        rules:[
            {
                test:/\.tsx$/,
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
        })
    ],
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    output : {
        filename:"index.js",
    },
}