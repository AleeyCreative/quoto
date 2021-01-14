// const { Joi, celebrate } = require("celebrate")
const { Router } = require("express")
const container = require("factory/index.js")
const Logger = require("../../services/Logger")

const router = new Router()
function carRoute(app) {
    app.use("/car", router)

    router.get(
        "/new",
        // celebrate({
        //     body: Joi.object({
        //         name: Joi.string().required(),
        //         model: Joi.string().required(),
        //         price: Joi.string().required(),
        //         brand: Joi.string().required(),
        //         date: Joi.date.required(),
        //     }),
        // }),
        async (req, res, next) => {
            const carServiceInstance = container.cradle.CarService
            try {
                const savedCar = carServiceInstance.saveCar(req.body)
                res.json(savedCar)
            } catch (e) {
                Logger.error(e)
                return next(e)
            }
        },
    )
}

module.exports = carRoute
