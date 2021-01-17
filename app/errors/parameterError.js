class ParameterError extends Error {
    constructor(msg, httpCode, parameter) {
        super(msg)
        this.name = "ParameterError"
        this.httpCode = httpCode || 500
        this.parameter = parameter
    }
}

module.exports = ParameterError
