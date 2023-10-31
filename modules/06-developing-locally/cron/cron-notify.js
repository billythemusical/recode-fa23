require('dotenv').config()
var cron = require('node-cron')
var Pushover = require('node-pushover');

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
});

cron.schedule('*/10 * * * * *', sendNotification)

function sendNotification() {
    push.send("Alien!", "🔊", handleErrors);
}

function handleErrors(error, response) {
    if(error) console.log('error:', error)
    console.log(response)
}