const path = require("path");

module.exports = {

    mode: "production",
    stats: "verbose",

    entry: {
        main1: "./src/js/main1.js",
    },

    optimization: {
        sideEffects: true
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-vanillajs.bundle.js"
    },

    // resolve: {
    //     extensions: [".ts", ".js"]
    // },

    // module: {
    //     rules: [
    //         {test: /\.ts$/, loader: "ts-loader"}
    //     ]
    // }
};