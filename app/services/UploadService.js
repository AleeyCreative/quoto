const Logger = require("services/Logger")
class UploadService {
    constructor({ fileParser }) {
        this.fileParser = fileParser
    }
    async processFiles(req) {
        try {
            const processedResult = await this.fileParser.process(req)
            console.log(processedResult)
            return processedResult
        } catch (e) {
            Logger.error(e)
            throw e
        }
    }
}
module.exports = UploadService
