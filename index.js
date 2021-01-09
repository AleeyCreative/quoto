const logger = require("./app/loaders/Logger.js")
const express = require("express")
const config = require("./app/config/index.js")
const loader = require("./app/loaders/index.js")

async function main() {
    const app = new express()
    await loader({ expressApp: app })
    app.listen(config.port, (err) => {
        if (err) {
            Logger.error(err)
            process.exit(1)
        }
        console.log(`
        ************************************************
        *   App is running on port ${config.port}      *
        ************************************************
        `)
    })
}

main()
