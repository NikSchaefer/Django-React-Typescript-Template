import { resolve } from "path";
import { DefinePlugin } from "webpack";

export const entry = "./src/index.js";
export const output = {
    path: resolve(__dirname, "./static/frontend"),
    filename: "main.js",
    publicPath: resolve(__dirname, "./static/frontend")
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
    ],
};
export const optimization = {
    minimize: true,
};
export const plugins = [
    new DefinePlugin({
        "process.env": {
            // This has effect on the react lib size
            NODE_ENV: JSON.stringify("production"),
        },
    }),
];