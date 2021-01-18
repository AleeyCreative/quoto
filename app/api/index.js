const userRoute = require("api/routes/user")
const carRoute = require("api/routes/car")
const publicRoute = require("api/routes/public")
const authenticate = require("api/middlewares/authenticate")
module.exports = (app) => {
    authenticate(app)
    userRoute(app)
    carRoute(app)
    publicRoute(app)
}
