const userRoute = require("api/routes/user.js")
const carRoute = require("api/routes/car.js")

module.exports = (app) => {
    userRoute(app)
    carRoute(app)
}
