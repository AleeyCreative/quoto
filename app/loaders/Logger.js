const debug = require("debug")

class Logger {
    constructor(logLibrary) {
        const logger = logLibrary
        this.log = logger("app:info")
        this.error = logger("app:error")
    }

    static log(any) {
        this.log(any)
    }
    static error(any) {
        this.error(any)
    }
}

module.exports = new Logger(debug)
