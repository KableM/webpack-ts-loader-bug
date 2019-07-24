const path = require("path");

module.exports = {

    mode: "production",
    stats: "verbose",

    entry: {
        main1: "./src/main1.ts",
        main2: "./src/main2.ts",
        main3: "./src/main3.ts",
    },

    optimization: {
        sideEffects: false
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader"}
        ]
    }
};