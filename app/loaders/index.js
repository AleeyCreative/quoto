const appLoader = require("loaders/app.js")
const Logger = require("services/Logger.js")

async function loader(options) {
    appLoader(options.expressApp)
}

module.exports = loader
