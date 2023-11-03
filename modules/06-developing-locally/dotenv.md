# .env file

The `.env` file, pronounced 'dot ee en vee', is often used in development to protect important passwords or API tokens from ending up in production environments. It's not even what the pro-pro's use, but it's a good-enough solution for our purposes. 

>Click to hear pronunciation.
><audio controls style="top-padding: 10px; height: 20px;"><source src="../../dotENV.aiff" type="audio/aiff"></audio>
>And if you're curious how I made the above recording, check out [this ChatGPT convo](https://chat.openai.com/share/25e86b2b-2b05-4e5f-9948-cc72e47f34ca).

### The dotenv package

The `dotenv` package in `npm` allows us to bring the `.env` file's contents into Node's `process` object and access them in our script environment. You can accomplish this with a one-liner at the top of your code and then access any of the variables like so:
```js
// starting in .env file...
API_KEY="skajhgfiuifuhbdkjbn" # some bogus api key


// and then in say, script.js...
require('dotenv').config()

const API_KEY = process.env.API_KEY 
console.log(API_KEY)
// outputs skajhgfiuifuhbdkjbn
```

Now the `API_KEY` variable in the Node script will contain the value of the `API_KEY` variable from the `.env` file. 

### Using .gitignore 

As long as we include the `.env` file in our `.gitignore`, its contents will remain safely on our local computer, and whoever we share the code with can create their own `.env` file after they clone our repo. You'll often see instructions for `.env` files in a repo's README.