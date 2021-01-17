class DatabaseFetchError extends Error {
    constructor(msg, httpCode) {
        super(msg)
        this.name = "DatabaseFetchError"
        this.httpCode = httpCode || 500
    }
}

module.exports = DatabaseFetchError
