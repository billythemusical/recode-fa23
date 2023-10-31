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


### Persistance with pm2

To have the app persist beyond the current terminal session, you must use a process manager like `pm2`. 

It is recommended that you install "globally" because it is often re-used when developing various projects. To do so, you can add the `--global` or `-g` flag like so:
```js 
npm install pm2 --global
```
If you get `EEACCESS` errors or the like, you may have to run this command with `sudo` first, denoting that you are a `Super User` who can `Do`.
```js
sudo npm install pm2 --global
```
To launch the app with `pm2`, type:
```js
pm2 start app.js
```
To check the status of pm2, where you will see the name of your app and its online/offline status, type:
```js
pm2 status
``` 
You can stop the app by typing:
```js
pm2 stop // and your app name
```
For example, if my app was named "app", I would type `pm2 stop app`.

### Persistance with counter
There is an [example](./app-with-counter.js) here with an index variable that acts as a counter which you could use to cycle through a list of items that you wanted to send in a sequence (or randomly).

But... what's a smarter way?  Because the index will reset when the script is restarted, say, after an error.  You could explore saving the index value in a file on the computer, so it would persist even if the app crashed and restarted (check out the `fs` package and [this StackOverflow discussion](https://stackoverflow.com/questions/22795806/writing-data-to-text-file-in-node-js#:~:text=6,with%20the%20filesystem%3A)).  You could also take advantage of the date or day of the week as they are persistent values.
