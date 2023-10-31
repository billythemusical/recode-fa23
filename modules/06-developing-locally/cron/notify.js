require('dotenv').config()

var Pushover = require('node-pushover');
var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
});

// No callback function defined:
push.send("Alien!", "🔊", handleErrors);

function handleErrors(error, response) {
    if(error) console.log('error:', error)
    console.log(response)
}