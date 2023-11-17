const path = require('path')

// to save our form data
const Datastore = require('nedb')
const db = new Datastore({ filename: './datastore.db', autoload: true });

// our server apps
const express = require('express');
const app = express()
const port = 3000

// using multer for file uploads
const multer = require('multer')
const upload = multer({ dest: './public/uploads/' })

// this will allow our server to render HTML
app.set('view engine', 'ejs');
// setting our folder in which to put our EJS/HTML files
app.set('views', path.join(__dirname, 'views'));

// middleware for parsing application/json
app.use(express.json());

// middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// serve the static files
app.use(express.static('public'))

// where we'll upload our form data
app.post("/thank-you", upload.single('image'), (req, res) => {
    if (req.body) {
        console.log(req.body, req.file)
    }

    // get the messy date and convert
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

    db.insert(doc, (err, newDoc) => {
        if (err) {
            console.error('There was an ERROR saving to the database.')
        } else {
            console.log('Saved docs to database.', newDoc)
        }
    });

    const thankYou = path.join(__dirname, 'public/thank-you.html')
    res.sendFile(thankYou)
})

app.get('/listings', (req, res) => {
    db.find({}, (err, docs) => {
        // pick up here with all the docs, render as listings...
        if (err) {
            console.error('There was an ERROR retrieving the database.')
        } else {
            console.log('Here are your docs.', docs)

            // render your EJS template with the entries
            // res.send('what do you want?')
            res.render('listings', { listings: docs });
        }
    })
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