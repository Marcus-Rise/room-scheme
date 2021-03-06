/* eslint-disable */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const data = require("./src/data.json");
const packageData = require("./package.json");

module.exports = {
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                filename: "demo.html",
                minify: false,
                templateContent: `
<head>
<meta charset="utf-8">
<title>room-scheme demo v${packageData.version}</title>
<script src="https://unpkg.com/vue@2.6.11/dist/vue.min.js"></script>
</head>

<body>
<room-scheme data-scheme='${JSON.stringify(data)}'></room-scheme>
<room-scheme data-scheme='${JSON.stringify(data)}' editor></room-scheme>
</body>
`
            })
        ]
    }
}
