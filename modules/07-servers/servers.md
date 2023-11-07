---
title: Servers
module: 06-servers
---

# Servers

### Serving Static Files

The websites we have built so far have only dealt with the front end, client-side code that executes in the browser. Working with API's would be the only exception, but we are still only consuming the external data, not providing it ourselves. In this way, these sites are considered to be **static** - the client requests the HTML page and it is sent by the server. This request may also include CSS or Javascript files, images, video, etc. and the experience is sort of all contained there in the browser. 

To run a server that mimics the behavior of the VS Code **Live Server** extension, we can use so-called "middleware" in Express. The code would look like this:

```js
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
```

But what if there is additional data that needs to be updated on the page? The user can of course **refresh** the page manually, but in the case of real-time communication like chat or a news feed, this doesn't make for a pleasant user experience. In order to manage sending updated data in real-time, or as close to real-time as the network will allow, you need to manage the backend as well as the front end. 

>To go further in mimicking our VS Code Live Server, but for the backend, we can use `nodemon` to get the auto-refresh behavior each time we make a change. Read more [here](nodemon.md).

# Taking Requests

We have worked some with how API's can give us external data, but what if you wanted to write your own API? Well, that is where **servers** come in. Servers allow us to control not only the static files that are sent to the client (our front-end files), but all kinds of other things.

### Basic HTTP Requests

There are a [number of basic types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of HTTP requests, but the main two we'll focus on are:

- GET
- POST

That's because they comprise most of what you'll need to do: `GET`/download data and `POST`/upload data. 

Let's first look at a simple 'hello world' server example where we will use the `GET` method. `GET` is the default method for all regular web browsing that you do. 

For this, we will be using [Express.js](https://expressjs.com/) which is a very robust server library. Express is capable of doing the most simple tasks, all the way up to writing very robust API's. It uses the `app` object and parlance for most of it's functionality. The server will "listen" for HTTP requests, either from a browser or terminal or other interface, and return some data based on the server configuration. 

For now, we'll just listen for a `GET` request and simply respond with, "hello world":
```js
const express = require('express')
const app = express()
const port = 3000

// the first argument is called the 'route'
// and a callback to handle the request
app.get("/", () => res.send("hello world"))

// listen means the server is running
app.listen(port, () => console.log(`Server listening here: http://localhost:${port}!`))
```

Now when we point our browser to `http://localhost:3000`, we should see 'hello world' in our browser window. 

### So what???

Well, there are a lot of fun things you can do with servers, and we will touch on some of them in this class, but it's a whole wild world out there and I would encourage you to check out a book like [Express In Action](https://www.manning.com/books/express-in-action) which can show you how to build applications what manage users and databases and the like. But we can still have some fun, so let's see what we can get up to...

#### Under lock and key

Firstly, servers allow us a level of security and obfuscation that front-end code alone does not. After all, your bank account information is availalbe on the web, but only to a select few, namely (and only) you (so we hope 😈). This is accomplished with passwords of course. And since servers store those passwords out of sight, users can rest assured that their information is secure. 

We can demonstrate this behavior by putting our website behind a simple password system using Express.js's middleware.

Check out this example [here](express-password/app.js).

``````




