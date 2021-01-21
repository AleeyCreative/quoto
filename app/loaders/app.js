const bodyParser = require("body-parser")
const path = require("path")
const api = require("api")
const formidableMiddleware = require("formidable-middleware")
const { static } = require("express")
const config = require("config")
const { GlobalErrorHandler } = require("errors")
const globalErrorHandler = new GlobalErrorHandler()
function appLoader(app) {
    app.use(
        formidableMiddleware({
            upload_dir: config.uploadDir,
            multiples: true,
            encoding: "utf-8",
        }),
    )
    app.use(static(path.join(config.static_url)))
    api(app)
    app.use("/", globalErrorHandler.handleErrors)
}

module.exports = appLoader
