const { publisher, events } = require("publisher")
const Subscriber = require("subscribers")

function loadPubSub() {
    const subscriber = new Subscriber({ publisher, events })
    return subscriber
}

module.exports = loadPubSub
