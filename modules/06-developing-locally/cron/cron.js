var cron = require('node-cron')

cron.schedule('*/10 * * * * *', () => console.log('running every 10 seconds'))
