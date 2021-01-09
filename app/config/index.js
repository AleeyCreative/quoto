const dotenv = require("dotenv")

// initialize dotenv
dotenv.config()

// config object
const config = {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
}

module.exports = config
