const Logger = require("services/Logger.js")
const express = require("express")
const config = require("config/index.js")
const loader = require("loaders/index.js")

async function main() {
    try {
        const app = new express()
        await loader({ expressApp: app })
        app.listen(config.port, (err) => {
            console.log(`
        --------------------------------------------
        |   App is running on port ${config.port} 🚀 |
        --------------------------------------------
        `)
        })
    } catch (e) {
        Logger.log(e)
        process.exit(1)
    }
}

main()
