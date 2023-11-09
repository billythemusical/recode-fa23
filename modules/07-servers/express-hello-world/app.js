const express = require('express')
const app = express()
const port = 3000

// the first argument is called the 'route'
// and a callback to handle the request
app.get("/", (req, res) => {
    res.send("hello world")
})

// listen means the server is running
app.listen(port, () => console.log(`Server listening here: http://localhost:${port}`))
