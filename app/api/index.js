const auth = require("api/routes/auth.js")
const car = require("api/routes/car.js")

module.exports = (app) => {
    auth(app)
    car(app)
}
