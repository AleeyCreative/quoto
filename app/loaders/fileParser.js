const formidable = require("formidable")
const path = require("path")

function loadFileParser(options) {
    const fileParser = formidable(options)
    fileParser.process = (requestObject) =>
        new Promise((resolve, reject) =>
            fileParser.parse(requestObject, (err, fields, files) => {
                if (err) return reject(err)
                return resolve({ fields, files })
            }),
        )
    return fileParser
}

module.exports = loadFileParser({
    multiple: true,
    keepExtensions: true,
    uploadDir: path.join(process.cwd(), "uploads"),
})
