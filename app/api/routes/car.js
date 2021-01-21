// const { Joi, celebrate } = require("celebrate")
const { Router } = require("express")
const factory = require("factory/index.js")
const Logger = require("services/Logger")

const router = new Router()
const carServiceInstance = factory.cradle.CarService
function carRoute(app) {
    app.use("/car", router)

    router.post("/new", async (req, res, next) => {
        try {
            const savedCar = await carServiceInstance.saveCar(req)
            res.json(savedCar)
        } catch (e) {
            Logger.error(e)
            return next(e)
        }
    })
    router.get("/:id", async (req, res, next) => {
        try {
            const retrievedCar = await carServiceInstance.getCar(req.params.id)
            res.json(retrievedCar)
        } catch (e) {
            return next(e)
        }
    })
}

module.exports = carRoute
