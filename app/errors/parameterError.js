class ParameterError extends Error {
    constructor(msg, httpCode) {
        super(msg)
        this.name = "ParameterError"
        this.httpCode = httpCode || 500
    }
}

module.exports = ParameterError
