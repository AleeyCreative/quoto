// const { Joi, celebrate } = require("celebrate")
const { Router } = require("express")
const factory = require("factory/index.js")
const Logger = require("../../services/Logger")

const router = new Router()
function userRoute(app) {
    app.use("/auth", router)

    router.post(
        "/signup",
        // celebrate({
        //     body: Joi.object({
        //         name: Joi.string().required(),
        //         password: Joi.string().required(),
        //         email: Joi.string().required(),
        //     }),
        // }),
        async (req, res, next) => {
            const userServiceInstance = factory.cradle.UserService
            try {
                const serviceResponse = await userServiceInstance.signup(req.body)
                res.json(serviceResponse)
            } catch (e) {
                Logger.error(e)
                return next(e)
            }
        },
    )
}

module.exports = userRoute
