const userModel = require("../app/testmodels/users.js")

async function main() {
    const res = await userModel("insert", { name: "baba ali", age: 22 })
    console.log(res)
}

async function userQuery(query, obj = {}) {
    return new Promise((resolve, reject) => {
        userModel[query](obj, (err, user) => {
            if (err) return reject(err)
            return resolve(user)
        })
    })
}

main()
