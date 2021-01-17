const Logger = require("services/Logger")
const { ParameterError, DatabaseFetchError } = require("errors")
class CarService {
    constructor({ carModel, UploadService }) {
        this.model = carModel
        this.UploadService = UploadService
    }
    async saveCar(req) {
        try {
            console.log(req.body)
            const carObj = await this.UploadService.processRequest(req)
            const savedCar = await this.model("insert", carObj)
            Logger.log(savedCar)
            return savedCar
        } catch (e) {
            throw e
        }
    }
    async getCar(id) {
        try {
            if (!id) {
                throw new ParameterError("No id was passed", "", "id")
            }
            const queryBody = { _id: id }
            const retrievedCar = await this.model("findOne", queryBody)
            if (!retrievedCar) throw new DatabaseFetchError()
            return retrievedCar
        } catch (e) {
            throw e
        }
    }
}

module.exports = CarService
