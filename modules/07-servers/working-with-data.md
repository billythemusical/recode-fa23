---
title: working with data
module: 07-servers
---

One of the most fundamental functions of a server is working with user data. Here we will mimic an experience I once had while driving through the hills of Virginia, on my way back home to Georgia from NY. There was a call-in radio show where residents of this small town spoke for a few seconds to simply tell their phone number, an item they had to give away for free and a short description, and their phone number again, perhaps repeated once more by the DJ, and then the next resident came on the line. On it went like this for half an hour. And that was the whole show! It was such a heart-warming and simple treat - and the accents! :)

We can create something similiar using Express.js and HTML forms. Below is an example form that we can put into any HTML page. Notice the `action` attribute. Once the form is submitted, this is the route that our server will need to be listening at in order to receive the form data.
```HTML
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

    <!-- ... -->

    </form>
```

In Express.js, we can set up a basic `post` route to listen for `/submit` requests and console.log the body of those request to see what all we get. Here's an example:

```js
app.post("/submit", (req, res) => {
    if(req.body) {
        console.log(req.body)
    }
}
```

It's a good idea to check though if there is a `req.body` or else you'll crash the server. We'll also need to add some middleware to help us process the form data.

```js
// middleware for parsing application/json
app.use(express.json());

// middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
```

Let's check out the example project and talk more about building this application out. The next things we'd like to do is:

1) Add a database using `nedb` so we can save posts that users make.
    - [nedb](https://www.npmjs.com/package/nedb)
2) Have a listings page where users can see all the community posts.
    - tools required: [ejs](https://www.npmjs.com/package/ejs)
3) Add the ability for users to upload pictures to their posts.
    - tools required: [multer](https://www.npmjs.com/package/multer)