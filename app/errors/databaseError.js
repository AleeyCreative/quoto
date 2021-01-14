class DatabaseError extends Error {
    constructor(msg, httpCode) {
        super(msg)
        this.name = "DatabaseError"
        this.httpCode = httpCode || 500
    }
}

module.exports = DatabaseError
