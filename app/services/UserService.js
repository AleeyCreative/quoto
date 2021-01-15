const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Logger = require("services/Logger")
const config = require("config/index.js")
const { DatabaseError, AuthenticationError } = require("errors/index.js")

class UserService {
    constructor({ userModel, EmailService }) {
        this.userModel = userModel
        this.EmailService = EmailService
    }
    async signup(userBody) {
        try {
            const salt = bcrypt.genSaltSync(config.salt)
            const hashedPassword = bcrypt.hashSync(userBody.password, salt)
            Logger.error("Creating new user...")
            const userDoc = await this.userModel("insert", { ...userBody, password: hashedPassword })
            if (!userDoc) {
                throw new DatabaseError("Cannot create new user")
            }
            Logger.log("Sending new user a welcome email")
            delete userDoc.password
            const token = this.generateToken(userDoc)
            await this.EmailService.sendWelcomeEmail(userDoc)
            return { userDoc, token }
        } catch (e) {
            Logger.error(e)
            throw e
        }
    }
    async login(userBody) {
        try {
            const existingUser = await this.userModel("findOne", { email: userBody.email })
            if (!existingUser) {
                throw new AuthenticationError("User does not exists")
            }
            const passwordOkay = bcrypt.compareSync(userBody.password, existingUser.password)
            if (!passwordOkay) {
                throw new AuthenticationError("Password invalid !")
            }
            Logging.log("A user just signed in!")
            delete userDoc.password
            const token = this.generateToken(userDoc)
            return { userDoc, token }
        } catch (e) {
            Logger.error(e)
            throw e
        }
    }

    generateToken(user) {
        const token = jwt.sign(user, config.jwtSecret)
        return token
    }
}

module.exports = UserService
