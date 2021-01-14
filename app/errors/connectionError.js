class ConnectionError extends Error {
    constructor(msg, httpCode) {
        super(msg)
        this.name = "ConnectionError"
        this.httpCode = httpCode || 500
    }
}

module.exports = ConnectionError
