const Datastore = require("nedb")
const path = require("path")

function loadModel() {
    const filename = path.join(__dirname, "testmodels", "cars.db")
    const userDb = new Datastore({ filename, autoload: true })
    return carModel
}

module.exports = loadModel()
