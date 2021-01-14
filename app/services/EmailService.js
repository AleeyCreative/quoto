const { MailError } = require("errors/index.js")
const mock = require("mocker/index.js")
class EmailService {
    constructor(emailClient) {
        this.emailClient = emailClient
    }

    async sendWelcomeEmail(user) {
        Promise.resolve(mock(`sending email to ${user.name}`, "EmailService"))
    }
    async send(mailData) {
        const sendStatus = await this.emailClient.send(mailData)
        if (sendStatus) {
            return this.createSendReciept(sendStatus)
        }
        throw new MailError("Unable to send mail ❕")
    }

    async createSendReciept(status) {
        return {
            sent: true,
            status,
        }
    }
}

module.exports = EmailService
