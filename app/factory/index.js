const awilix = require("awilix")
const carModel = require("testmodels/cars")
const userModel = require("testmodels/users")
const UserService = require("services/UserService")
const EmailService = require("services/EmailService")
const CarService = require("services/CarService")
const UploadService = require("services/UploadService")
const mock = require("mocker/index.js")
const formParser = require("loaders/formParser")
const factory = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
})

factory.register({
    UserService: awilix.asClass(UserService).scoped(),
    EmailService: awilix.asClass(EmailService).scoped(),
    UploadService: awilix.asClass(UploadService).scoped(),
    CarService: awilix.asClass(CarService).scoped(),
    carModel: awilix.asValue(carModel),
    userModel: awilix.asValue(userModel),
    formParser: awilix.asValue(formParser),
    // .}..
})

module.exports = factory
