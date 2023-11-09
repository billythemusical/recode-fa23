// our server apps
const express = require('express');
const app = express()
const port = 3000

// middleware for parsing application/json
app.use(express.json());

// middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// serve the static files
app.use(express.static('public'))

// where we'll upload our form data
app.post("/submit", (req, res) => {
    if (req.body) {
        console.log(req.body)
    }

    const thankYou = path.join(__dirname, 'public/thank-you.html')
    res.sendFile(thankYou)
})

// listen means the server is running
app.listen(port, () => console.log(`Server listening here: http://localhost:${port}`))
