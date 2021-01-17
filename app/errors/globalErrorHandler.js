const AuthenticationError = require("errors/authenticationError")
const DatabaseError = require("errors/databaseError")
const DatabaseFetchError = require("errors/databaseFetchError")
const ParameterError = require("errors/parameterError")
const MailError = require("errors/mailError")
const errorMessages = require("errors/messages")
const Logger = require("services/Logger")
/**
 * Error classes uses pascal case e.g AuthenticationError
 * Error message functions uses camelCase e.g authenticationError
 */
class GlobalErrorHandler {
    constructor() {
        this.name = "GlobalErrorHandler"
    }
    async handleErrors(err, req, res, next) {
        Logger.error(err)
        if (err instanceof AuthenticationError) {
            res.status(404).json({ error: errorMessages.authenticationErrorEmail() })
        }
        if (err instanceof DatabaseError) {
            res.status(500).json({ error: errorMessages.databaseError() })
        }
        if (err instanceof DatabaseFetchError) {
            res.status(404).json({ error: errorMessages.databaseFetchError() })
        }
        if (err instanceof MailError) {
            res.status(404).json({ error: errorMessages.mailError() })
        }
        if (err instanceof ParameterError) {
            res.status(404).json({ error: errorMessages.parameterError(err.parameter) })
        }
    }
}
/**
 *Responsibilites
 *  1. Handles Global errors
 *  2. Has access to req and response
 *  3. Has Access to Logger instance
 *  4. Sends email notification to user in case of serious issue.
 */

module.exports = GlobalErrorHandler
