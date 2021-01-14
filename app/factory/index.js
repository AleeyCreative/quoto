const awilix = require("awilix")
const userModel = require("testmodels/users")
const UserService = require("services/UserService")
const EmailService = require("services/EmailService")
const mock = require("mocker/index.js")
const factory = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
})

factory.register({
    UserService: awilix.asClass(UserService).scoped(),
    userModel: awilix.asValue(userModel),
    EmailService: awilix.asClass(EmailService).scoped(),
    // .}..
})

module.exports = factory
