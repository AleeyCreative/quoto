const Datastore = require("nedb")
const path = require("path")

function loadModel() {
    const filename = path.join(__dirname, "cars.db")
    const carModel = new Datastore({ filename, autoload: true })
    async function carQuery(query, obj = {}) {
        return new Promise((resolve, reject) => {
            carModel[query](obj, (err, car) => {
                if (err) return reject(err)
                return resolve(car)
            })
        })
    }
    return carQuery
}

module.exports = loadModel()
