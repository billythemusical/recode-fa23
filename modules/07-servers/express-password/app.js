const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST request for password verification
app.post('/verify-password', (req, res) => {
    const correctPassword = 'secret'; // The correct password. Store securely in real apps.

    if (req.body.password === correctPassword) {
        res.status(200).send({ verified: true });
    } else {
        res.status(401).send({ verified: false });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
