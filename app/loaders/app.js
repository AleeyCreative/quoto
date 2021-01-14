const bodyParser = require("body-parser")
const api = require("api/index.js")
function appLoader(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    api(app)
}

module.exports = appLoader
