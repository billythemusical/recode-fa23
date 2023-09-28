![An Apple II computer with external disk drives is set among a glowing-pink cat, who is lying down on the left, and a multi-colored succulent in a black pot on the right. There is a neon pink grid of perspective squares comprising the floor beneath and low-poly digitized mountain ranges in the background with neon blue trim lines. The words Re:Code are centered at the top in a large white font that is in a stylized digital form.](images/synthwave-wallpaper-neural-medium.jpg)

# <h>Course Outline</h>
Fall 2023

[Introduction](#introduction) - Whuuuut(s)?  
[Module 1](#module-1---foundations) - Foundations (HTML / CSS)  
[Module 2](#module-2---🍦-vanilla--asynchornous-javascript) - Vanilla & Asynchronous Javascript  
[Module 3]() - Working with External Libraries*  
[Module 4]() - Working with Graphics & Pixels*  
[Module 5]() - Coding with Generative AI  
[Module 6]() - Developing Locally  
[Module 7]() - Using Git and Github  
[Module 8]() - Working outside the browser*  
[Module 9]() - Progressive Web Apps*  
[Module 10]() - Simple Web Servers*  

> Note: <b>*</b> indicates a module that last two weeks.

## Introduction

Welcome, everyone, to the class! Let's first introduce ourselves and talk about our interests. Then we will go over the syllabus, course outline, how to use the class website, how to contact me and Lucia, how to book drop-in hours, etc. We'll also discuss the ITP/IMA Code of Conduct.

📕 **Reading - due before class on Thu Sep 7th:** - 

1) Please fill out this [short questionnaire](https://forms.gle/GYPn86yeta4E1yTb9) so we can get to know you a little better.  
⏱ *Approx. time to complete: 5 minutes* 

2) Read the Wikipedia page on [net.art](https://en.wikipedia.org/wiki/Net.art) and share anything you find interesting, inspiring, offensive, or otherwise thought-provoking or worthy of discussion among the class. Put your thoughts in this [Google Doc](https://docs.google.com/document/d/1W8seghwUVAAKGFoHotT8pFpZQ_0sqcVdAEWvvIIsNuw/edit?usp=sharing).  
⏱ *Approx. time to complete: 40 minutes*

✅ *Total time: 45 minutes* 

## Module 1 - Foundations (HTML / CSS)

[CLASS NOTES](./modules/01-foundations-html-css/html-css.md) have moved!

Discussion topics:
- What is the internet? 
- How did the internet begin? [[1](https://www.britannica.com/topic/ARPANET)],[[2](https://en.wikipedia.org/wiki/ARPANET)]  

## HTML

HTML stands for Hyper Text Markup Langauge and it is composed of:

- Tags
- Attributes
- CSS selectors

In-class exercise:

1) Download a text editor like [VS Code](https://code.visualstudio.com/).

2) Using the [HTML boilerplate page](./modules/01-foundations-html-css/html-boilerplate.html) as a starting point, quickly work up an About Me page. The page should include:
    - Your name (your name perhaps or a pithy quip about yourself - *Gen Z introvert on the verge of complete public meltdown*🍦🤸🏼‍♂️✌️)
    - Hometown(s)
    - Educational background
    - A short story about what you did this summer, or perhaps a trip you recently took
    - Previous Occupation(s)
    - Hobbies
    - Interests
    - Pictures  
    - Videos 
3) Do not worry about making the page "look good". We are just making a list right now. We will use CSS to change the style later.

📕 **Reading - due before class on ~~Tue Sep 12th~~ Thu Sep 14th:**


Read Emma Rae Norton's [hand coding round robin](https://doodybrains.github.io/hand-coding-round-robin/) workshop guide for inspiration. There is also some interesting 'not required' reading. The HTML code for the workshop page can be found [here](https://github.com/doodybrains/hand-coding-round-robin/blob/master/index.html). 

>It's ok if there are things you don't understand on the page. Try to Google them, reference the W3 Schools site, or just make a note of your questions and book a drop-in appointment or pop up a hand in class! 

The code is written in such a way as to be more easily understood and read by humans. There is a intentional connection left bare between the code and the output, as if the author is letting you into the art studio to watch them paint - quite a different feeling from when you inspect the source of any modern-day sites which obscure much of the code, often by design.

Lastly, if you're not familiar with [School For Poetic Computation](https://sfpc.io/) (SFPC), check them out! They regularly do shows of student work which are always inspiring and thought-provoking. Lots of ITP/IMA alums are involved there as well.

⏱ *Approx. time to complete: 45 minutes to 1 hour* 


## CSS

CSS stands for Cascading Style Sheets.

- selectors
    - [W3 CSS selector guide](https://www.w3schools.com/cssref/trysel.php)
- properties
- how to apply
    - inline // `<p style="color: green;">Here's some green text!</p>`
    - internal // `<style> <!-- CSS block goes here --> </style>`
    - external // `<link rel="stylesheet" href="style.css">`
- The Box Model
    - link to [Box Model playground](https://codepen.io/gabaza/pen/wEoLQY)

![An image of the CSS Box Model as seen in the Chrome browser's inspector window - a number of concentric rectangles of varying colors, labeled from the outside moving inwards: margin, border, padding, content.](./images/chrome-box-model.png)

✔️ In-Class Exercise

1. Go to [Neocities.org](https://neocities.org) and create an account.
2. Using the interface, create a new folder called "01-foundations" and navigate to it. This is where you will upload Assignment 1.
3. Upload your `about-me.html` page inside of this folder or whatever you have called your file. You can also experiment uploading other pages and file types as well.
>This is how you will turn in your assignment link so get familiar with how to navigate these pages. Later, we will move to using Github Desktop and Github Pages.


📌 **Assignment 1 📌 - due before class on Tue Sep 19th:** 

Hand-code your own HTML web page and publish it Neocities. Here are some types of pages that you could choose for inspiration:
- an 'About Me' page, something people could read to get to know your personal history, interests, background, musical tastes, hobbies, etc. 
- a portfolio page which shares a bio and links to your artistic projects or professional portfolio
- a zine or other writing or illustration project
- a recipe page for making your favorite dish or perhaps a family recipe or tradition
- a wiki page about a topic that you find particularly interesting

Feel free to experiment and try some different things out. I'd like to see that you took the time to explore. Also, take a look at some of the student work from the Emma Rae Norton's [hand-coding-round-robin](https://doodybrains.github.io/hand-coding-round-robin/archive/) archive and see what kinds of things might be fun to try like, for example, the `<marquee>` tag, playing with `transform`, or getting completely wacky with `animation: rotate 1s alternate infinite;` 😅...

Here's a handy [HTML / CSS Cheat Sheet](https://docs.google.com/document/d/1yCs8SHUIhQGyLQt43A1Z5HUFX_ZTUm2rLhAkWBOILbw/edit?usp=sharing).

⏱ *Approx. time to complete: 3 hours*  
⏩ Submit the Neocities link to your assignment on [this form](https://forms.gle/qFmdmwFxJA1Jccs16).

## Module 2 - 🍦 Vanilla & Asynchronous Javascript  

[CLASS NOTES](./modules/02-vanilla-js/vanilla-js.md)  

>If HTML & CSS are the body and the clothing, Javascript makes us dance mmmmk 🤸🏼‍♂️
* Navigating the **DOM**
    - [The Document Object Model](https://www.w3schools.com/js/js_htmldom.asp)
* Using `document.getElementById()`
* Callbacks, making *do* without `draw()`
* `setTimeout()` to trigger events, make loops 🔄

- `async/await` using `fetch()`  
    - build API request with `URL`
    - anonymous arrow functions `() => {}` 
    - `try/catch` blocks for errors

Some relevant Coding Train Videos: 
- [setTimeout](https://www.youtube.com/watch?v=nGfTjA8qNDA&ab_channel=TheCodingTrain)
- [fetch & async/await](https://www.youtube.com/watch?v=tc8DU14qX6I&ab_channel=TheCodingTrain)
- 

📕 **Reading #2 - TO DO before class on Thu Sep 28th:**

We will be setting up Github accounts to turn in our classwork from here on out. Assignment 2 will be turned in and published as a Github Pages site. We will also be able to easily include Assignment 1 into this platform as well.

1. Create a [Github account](https://github.com). If you already have one, great.
2. Download and install [Github Desktop](https://desktop.github.com/). If you are already familiar (and adept?) with Git, that's fine too. Better yet, let me know!
3. Post the link to your Github account page to [this Google form](https://forms.gle/qFmdmwFxJA1Jccs16) under Reading 2. The format will be `https://github.com/yourusername` where `yourusername` is the user name you chose when you just signed up. For example, my link is `https://github.com/billythemusical`. 

📌 **Assignment 2 - API APP📌 - due before class on Thu Oct 5th:** 

Build your own interactive API app! You can pick from the list of app ideas below and make an interactive app that does the following:  

1. Takes user input of some kind - a button press, some text, location data, anything - be creative if you like! 
2. Sends that user input to the chosen API.
3. Displays the results of the API to your user in a visually compelling manner.  

>Kudos/bonus points for sleek UI/UX or totally retro/expertly awkward designs. ◻️ // 👹

- 🌦 Weather App (Medium)
    - Use the [OpenWeatherMap API](https://openweathermap.org/api) or a similar weather API to fetch the current weather for a given city.
    - Change the app background based on the weather condition using the fetched data.
    - Show the 5 day forecast!

- ⁇ Trivia App (Hard)
    - Use the [Open Trivia Database](https://opentdb.com/) to make a trivia game.
    - Let users can select:
        - category
        - difficulty
        - type of question
    - Keep score and manage multiple players
- 🛰 Space App (Medium)
    - Using [NASA's API](https://api.nasa.gov/), you can:
        - Explore the [Image and Video Library](https://api.nasa.gov/#:~:text=images.nasa.gov-,NASA%20Image%20and%20Video%20Library,-Use%20this%20API)
        - Get the [APOD](https://api.nasa.gov/#:~:text=of%20the%20Day-,APOD,-One%20of%20the) Astronomy Picture Of the Day
        - Get the latest Space Weather Database [Notifications](https://api.nasa.gov/#:~:text=06%26api_key%3DDEMO_KEY-,Notifications,-https%3A//api.nasa)
- 📰 News App (Medium)
    - Using the [NewsAPI](https://newsapi.org/) you can:
        - Give your users the latest headlines.
        - Let them search for articles on a subject.
        - Incorporate an image search API into the results.
- ✨ Roll Your Own (???)
    - Find your own (preferably free) API online or on a service like [API Ninjas](https://api-ninjas.com) and build your app according to the parameters set out above.

⏩ Publish your working site to your Github Pages site and upload the link to the page on [this form](https://forms.gle/qFmdmwFxJA1Jccs16).  

⏱ *Approx. time to complete: 4-6 hours*  

## Module 3 - Working with External Libraries  

## Module 4 - Working with Graphics & Pixels  

## Module 5  - Coding with Generative AI  

## Module 6 - Developing Locally  

## Module 7 - Using Git and Github  

## Module 8 - Working outside the browser  

## Module 9 - Progressive Web Apps  

## Module 10 - Simple Web Servers  
