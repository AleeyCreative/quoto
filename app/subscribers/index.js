const { publisher, events } = require("publisher")
const Logger = require("services/Logger")
class Subscriber {
    constructor({ publisher, events }) {
        publisher.on(events.userSignup, this.handleSignup)
        publisher.on(events.userLogout, this.handleLogout)
        publisher.on(events.userForgotPassword, this.handleForgotPassword)
    }
    async handleSignup(userBody) {
        try {
            Logger.log(`User ${userBody.name} has just signed up`)
        } catch (e) {
            Logger.error(e)
        }
    }
    async handleLogout(userBody) {
        try {
            Logger.log(`User ${userBody.name} has just signed up`)
        } catch (e) {
            Logger.error(e)
        }
    }

    async handleForgotPassword(userBody) {
        try {
            Logger.log(`User ${userBody.name} has just signed up`)
        } catch (e) {
            Logger.error(e)
        }
    }
}

module.exports = Subscriber
