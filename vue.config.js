/* eslint-disable */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const data = require("./src/data.json");

module.exports = {
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                filename: "demo.html",
                minify: false,
                templateContent: `
<meta charset="utf-8">
<title>room-scheme demo</title>
<script src="https://unpkg.com/vue@2.6.11/dist/vue.min.js"></script>
<script src="./room-scheme.min.js"></script>

<room-scheme data-scheme='${JSON.stringify(data)}'></room-scheme>`
            })
        ]
    }
}
