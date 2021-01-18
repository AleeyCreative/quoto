module.exports = {
    GlobalErrorHandler: require("errors/globalErrorHandler"),
    ConnectionError: require("errors/connectionError"),
    DatabaseError: require("errors/databaseError"),
    DatabaseFetchError: require("errors/databaseFetchError"),
    AuthenticationError: require("errors/authenticationError"),
    TokenNotFoundError: require("errors/tokenNotFoundError"),
    TokenAuthenticationError: require("errors/tokenAuthenticationError"),
}
