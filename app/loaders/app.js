const bodyParser = require("body-parser")
const path = require("path")
const api = require("api")
const { static } = require("express")
const config = require("config")
function appLoader(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(static(path.join(config.static_url)))
    api(app)
}

module.exports = appLoader
