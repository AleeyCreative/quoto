const bodyParser = require("body-parser")
const path = require("path")
const api = require("api")
const { static } = require("express")
const config = require("config")
const { GlobalErrorHandler } = require("errors")
const globalErrorHandler = new GlobalErrorHandler()
function appLoader(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(static(path.join(config.static_url)))
    api(app)
    app.use("/", globalErrorHandler.handleErrors)
}

module.exports = appLoader
