const userRoute = require("api/routes/user.js")
const carRoute = require("api/routes/car.js")
const publicRoute = require("api/routes/public.js")
module.exports = (app) => {
    userRoute(app)
    carRoute(app)
    publicRoute(app)
}
