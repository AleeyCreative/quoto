class MailError extends Error {
    constructor(msg, httpCode) {
        super(msg)
        this.name = "MailError"
        this.httpCode = httpCode || 500
    }
}

module.exports = MailError
