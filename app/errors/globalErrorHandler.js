const AuthenticationError = require("errors/authenticationError")
const DatabaseError = require("errors/databaseError")
const parameterError = require("errors/parameterError")
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
        Logger.log(err)
        if (err instanceof AuthenticationError) {
            res.status(404).json({ error: errorMessages.authenticationErrorEmail() })
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
