class AuthenticationError extends Error {
    constructor(msg, httpCode) {
        super(msg)
        this.name = "AuthenticationError"
        this.httpCode = httpCode || 500
    }
}

module.exports = AuthenticationError
