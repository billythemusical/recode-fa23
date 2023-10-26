# Cron

So now that we understand a bit more about what Node.js is and how to use the command line, let's see what we can get up to. One thing we can try, now that we have access to more than just the browser, is to run an automated task. 👾

[Cron](https://en.wikipedia.org/wiki/Cron) is a program that is used in Unix systems to schedule and run automated tasks at a variety of time intervals. We will use a particular Node.js port of Cron called [`node-cron`](https://www.npmjs.com/package/node-cron).

## Installing `node-cron` 

To use any particular package in Node.js, we have to first install that package using `npm` (remember Node Package Manager?). So fire up your terminal app and make a new folder for our project called `cron-test` like so:
```bash
mkdir cron-test
cd cron-test
npm install node-cron
```
You can now list the contents of the folder using the `ls` command. You'll see the `package.json` and `package-lock.json` files along with the `node_modules` folder which has the `node-cron` library.  Any additional packages you install with `npm` for this project will also go into `node_modules` and be tracked in the `package` files. 
 
>So what's the difference between `package.json` and `package-lock.json` anyways?  Let's see what [StackOverflow](https://stackoverflow.com/questions/45052520/do-i-need-both-package-lock-json-and-package-json) says:

![A screenshot of the first two answers from a Stack Overflow discussion which can be found at this link - https://stackoverflow.com/questions/45052520/do-i-need-both-package-lock-json-and-package-json](../../../images/package-vs-package-lock.jpg)


## Using Cron

Let's first make a new node script 

The `cron` object has a `schedule` method that takes a special string to denote the timing and then a callback.  The syntax for the timing can be kinda funky and you'll usually see it broken down as below:
```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

So to run a function every day at 9 am, you would write the following code.  Remember you first have to `require` the `node-cron` library.


```js
var cron = require('node-cron')

cron.schedule(' * 9 * * *', callback)
```
You may not want to wait until tomorrow morning to see your code run, so you can try printing to the console every 10 seconds using a special syntax `*/10`.
```js
cron.schedule('*/10 * * * * *', callback)
```

For more options, let's check out the [`node-cron`](https://www.npmjs.com/package/node-cron) documentation. What are some uses for Cron that come to mind? 

## Sending an iOS notification 

You can sign up for a free [Pushover](https://pushover.net/signup) account and send iOS notifications to their companion app using Node.js.  I think it's free for 30 days and then a $4.99 one-time purchase after that.

Once you have an account and a USERKEY, you have to [create an application](https://pushover.net/apps/build) which will give you an APPTOKEN.  

Once you have those, I like to use the [`node-pushover`](https://www.npmjs.com/package/node-pushover) package to send a message.  You can install it like so:
```bash
npm install node-pushover
```
You can send a message like so. And remember, we use the `.env` file and the `dotenv` package so we don't save our keys and tokens in our code.
```js
require('dotenv').config()

var Pushover = require('node-pushover');
var push = new Pushover({
	token: process.env.APPTOKEN,
	user: process.env.USERKEY
});

push.send("Some title", "Omg iOS notificaysh!");
```
We can combine this code with our Cron code and get to notifyin'!   

