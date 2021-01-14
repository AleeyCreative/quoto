const chalk = require("chalk")

function mock(what, where) {
    console.log(`${chalk.blue(where)}: ${chalk.green(what)}`)
}
module.exports = mock
