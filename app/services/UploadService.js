const Logger = require("services/Logger")
const config = require("config")
const path = require("path")
class UploadService {
    constructor({ fileParser }) {
        this.fileParser = fileParser
    }
    async processFiles(req) {
        try {
            const processedResult = await this.fileParser.process(req)
            return processedResult
        } catch (e) {
            throw e
        }
    }
    async processRequest(req) {
        try {
            const { fields, files } = await this.fileParser.process(req)
            const carPhotoUrlString = files.car_photo.path.split("/")
            const uploadName = carPhotoUrlString[carPhotoUrlString.length - 1]
            const hostPath = `${config.host}:${config.port}`
            /**
             * An array is used in joining the fullpath instead of path.join()
             * so as to retain the double slash "//" in http
             * Any smarter ideas?
             */
            const uploadPath = [hostPath, config.upload_dir, uploadName].join("/")
            return { ...fields, car_photo: uploadPath }
        } catch (e) {
            Logger.error(e)
            throw e
        }
    }
}
module.exports = UploadService
