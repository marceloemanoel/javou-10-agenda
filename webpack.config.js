const path = require("path");

module.exports = {
    entry: {
        "aplicacao": "./src/index.js"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "aplicacao.js"
    }
};