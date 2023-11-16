/*

This app mimics a community sale where users 
submit their yard sale items via an HTML page.
The server saves the form data using nedb and 
then renders that data to the client using ejs.

*/

const path = require('path')

// for storing the submitted data
const Datastore = require('nedb');
const db = new Datastore({ filename: './datastore.db', autoload: true });

// using multer to save our uploaded files
const multer = require('multer')
const upload = multer({ destination: './public/uploads/' })
// ...or import our custom multer function 
// const saveFile = require('./saveFile.js')

// our server apps
const express = require('express');
const app = express()
const port = 3000

// this will allow our server to render HTML
app.set('view engine', 'ejs');
// setting our folder in which to put our EJS/HTML files
app.set('views', path.join(__dirname, 'views'));

// middleware for parsing application/json
app.use(express.json());
// middleware for parsing form data aka application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simply log the requests at the come in
app.use((req, res, next) => {
    console.log(`REQUEST: ${req.url}`)
    next()
})
// server our static files
app.use(express.static('public'))

// where we'll upload our form data
// to use the custom multer function, change upload.single to saveFile.single
app.post('/thank-you', upload.single('image'), (req, res) => {
    if (req.body) {
        // multer adds the .file to the req object 
        console.log(req.body, req.file)
    }

    const newDate = friendlyDate(req.body.time)

    // create a document to insert into the database
    const doc = {
        name: req.body.name,
        contact: req.body.contact,
        time: newDate, // convert the date
        item: req.body.item,
        description: req.body.description,
        image: req.file
    };

    // insert the document into the database
    db.insert(doc, (err, newDoc) => {
        if (err) {
            console.error('Error inserting document:', err);
            // res.status(500).send('Error saving data');
        } else {
            console.log('Saved new document:', newDoc);
            // res.status(200).send('Data saved');
        }
    });

    const thankYou = path.join(__dirname, 'public/thank-you.html')
    res.sendFile(thankYou)
})


// route to get all the listings and render them using EJS
app.get('/listings', (req, res) => {
    console.log('getting listings')
    db.find({}, (err, entries) => {
        if (err) {
            // res.status(500).send('Error accessing database');
            console.log('Error accessing the database')
            return;
        }

        // render your EJS template with the entries
        res.render('listings', { listings: entries });
    });
})

// listen means the server is running
app.listen(port, () => console.log(`Server listening here: http://localhost:${port}`))


// makes the date from the form more readable
function friendlyDate(theDate) {
    // Convert the date to a more readable format and round to the nearest half hour
    const date = new Date(theDate);
    date.setMinutes(Math.round(date.getMinutes() / 30) * 30);
    const dateString = date.toLocaleString('en-US', {
        weekday: 'short', // "Thu"
        month: 'short',   // "Dec"
        day: 'numeric',   // "14"
        hour: 'numeric',  // "12 PM"
        minute: 'numeric',
        hour12: true
    });
    return dateString;
}