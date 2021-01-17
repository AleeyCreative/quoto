// const { Joi, celebrate } = require("celebrate")
const { Router } = require("express")
const factory = require("factory/index")
const Logger = require("services/Logger.js")
const formParser = require("loaders/formParser")

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
                const { fields: userBody } = await formParser.process(req)
                const serviceResponse = await userServiceInstance.signup(userBody)
                res.json(serviceResponse)
            } catch (e) {
                Logger.error(e)
                return next(e)
            }
        },
    )
    router.post("/login", async (req, res, next) => {
        const userServiceInstance = factory.cradle.UserService
        try {
            const { fields: userBody } = await formParser.process(req)
            const serviceResponse = await userServiceInstance.login(userBody)
            res.json(serviceResponse)
        } catch (e) {
            next(e)
        }
    })

    router.post("/upload-test", async (req, res, next) => {
        const uploadServiceInstance = factory.cradle.UploadService
        try {
            const { fields, files } = await uploadServiceInstance.processFiles(req)
            console.log(fields, files)
            res.send(`${files.car_photo.name} has been saved`)
        } catch (e) {
            Logger.error(e)
        }
    })
}

module.exports = userRoute
