class TokenAuthenticationError extends Error {
    constructor(msg, httpCode, parameter) {
        super(msg)
        this.name = "TokenAuthenticationError"
        this.httpCode = httpCode || 500
        this.parameter = parameter
    }
}

module.exports = TokenAuthenticationError
