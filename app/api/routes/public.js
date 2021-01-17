// const { Joi, celebrate } = require("celebrate")
const { Router } = require("express")
const factory = require("factory/index.js")
const Logger = require("services/Logger")

const router = new Router()
function carRoute(app) {
    app.use("/public", router)

    router.get(
        "uploads/:resource",
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
            try {
                const resource = req.params.resource
                const resourcePath = path.join(config.static_url, resource)
                res.sendFile(resourcePath)
            } catch (e) {
                Logger.error(e)
                return next(e)
            }
        },
    )
}

module.exports = carRoute
