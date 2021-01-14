const Datastore = require("nedb")
const path = require("path")

function loadModel() {
    const filename = path.join(__dirname, "users.db")
    const userModel = new Datastore({ filename, autoload: true })
    async function userQuery(query, obj = {}) {
        return new Promise((resolve, reject) => {
            userModel[query](obj, (err, user) => {
                if (err) return reject(err)
                return resolve(user)
            })
        })
    }
    return userQuery
}

module.exports = loadModel()
