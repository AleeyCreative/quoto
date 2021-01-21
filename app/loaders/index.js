const appLoader = require("loaders/app.js")
const Logger = require("services/Logger.js")
const loadPubSub = require("loaders/pubsub")
async function loader(options) {
    appLoader(options.expressApp)
    loadPubSub()
}

module.exports = loader
