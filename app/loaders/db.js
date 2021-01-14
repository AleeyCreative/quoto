const mongoose = require("mongoose")
const Logger = require("services/Logger")
const { ConnectionError } = require("errors")
const errormsg = require("errors/messages.js")
async function loadDB() {
    connectionInstance = await mongoose.connect(config.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    if (!connectionInstance) throw new ConnectionError(errmsg.dbError)
    Logger.info("Database connected successfully 👍")
    return connectionInstance.connection.db
}
