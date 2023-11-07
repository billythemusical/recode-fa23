const express = require('express')
// using 'app' is the typical way in express.js
const app = express()
// a common development port
const port = 3000

// 'use' the static middleware and give it a path
// 'public' refers to which part of the server is exposed to the web
app.use(express.static('public'))

// listen means the server is running
app.listen(port, () => console.log(`Server listening here: http://localhost:${port}!`))