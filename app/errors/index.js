module.exports = {
    GlobalErrorHandler: require("errors/globalErrorHandler.js"),
    ConnectionError: require("errors/connectionError.js"),
    DatabaseError: require("errors/databaseError.js"),
    DatabaseFetchError: require("errors/databaseFetchError.js"),
    AuthenticationError: require("errors/authenticationError.js"),
}
