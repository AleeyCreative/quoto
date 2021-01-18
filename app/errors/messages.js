module.exports = {
    dbError: () => `Cannot establish connection to Database 🙁`,
    databaseFetchError: () => `Sorry! Could not fetch the requested resource`,
    authenticationErrorPassword: () => `Sorry, password incorrect 🙁`,
    authenticationErrorEmail: () => `Sorry, the email you entered was not found in our database 🙁`,
    mailError: `Sorry, we could not send that email at this time 🙁`,
    parameterError: (parameter) => `Sorry, ${parameter} was not entered`,
    tokenAuthenticationError: () => `Sorry, you don't have the right to access this information 🙁`,
}
