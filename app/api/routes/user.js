// const { Joi, celebrate } = require("celebrate")
const { Router } = require("express")
const factory = require("factory")
const Logger = require("services/Logger")

const router = new Router()
const userServiceInstance = factory.cradle.UserService
function userRoute(app) {
    app.use("/auth", router)
    router.post("/signup", async (req, res, next) => {
        try {
            const { fields } = req
            const serviceResponse = await userServiceInstance.signup(fields)
            res.json(serviceResponse)
        } catch (e) {
            Logger.error(e)
            return next(e)
        }
    })
    router.post("/login", async (req, res, next) => {
        try {
            const { fields } = req
            const serviceResponse = await userServiceInstance.login(userBody)
            res.json(serviceResponse)
        } catch (e) {
            next(e)
        }
    })
}

module.exports = userRoute
