const awilix = require("awilix")
const userModel = require("testmodels/users")
const UserService = require("services/UserService")
const EmailService = require("services/EmailService")
const UploadService = require("services/UploadService")
const mock = require("mocker/index.js")
const fileParser = require("loaders/fileParser")
const factory = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
})

factory.register({
    UserService: awilix.asClass(UserService).scoped(),
    EmailService: awilix.asClass(EmailService).scoped(),
    UploadService: awilix.asClass(UploadService).scoped(),
    userModel: awilix.asValue(userModel),
    fileParser: awilix.asValue(fileParser),
    // .}..
})

module.exports = factory
