class TokenNotFoundError extends Error {
    constructor(msg, httpCode, parameter) {
        super(msg)
        this.name = "TokenNotFoundError"
        this.httpCode = httpCode || 500
        this.parameter = parameter
    }
}

module.exports = TokenNotFoundError
