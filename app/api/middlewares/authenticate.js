const jwt = require("jsonwebtoken")
const config = require("config")
const { TokenNotFoundError, TokenAuthenticationError } = require("errors")

const authenticate = (app) => {
    app.use("/car", authFunction)
    // app.use("/other-routes", authFunction)

    function authFunction(req, res, next) {
        console.log(req.headers)
        const token = req.headers["x-access-token"]
        if (!token) throw new TokenNotFoundError()
        const decoded = jwt.decode(token, config.jwtSecret)
        if (!decoded) throw new TokenAuthenticationError()
        req.user = decoded
        return next()
    }
}

module.exports = authenticate
