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

> HTML is the body; CSS is the clothing!

Discussion topics:
- What is the internet? 
- How did the internet begin? [[1](https://www.britannica.com/topic/ARPANET)],[[2](https://en.wikipedia.org/wiki/ARPANET)]  

### HTML

HTML stands for HyperText Markup Language. It's a text-based language that every web page is built with that the browser uses to render the visual elements on the screen, like text, images, and video. There are default rules and behaviors for laying out these elements and there are an infinite ways to customize the format. The rules for the default layout are based on the **Box Model**, which we will discuss in greater detail once have written some code ourselves and start to play with it.

The `<tag>` is primary building block of HTML. Tags typically have two parts - an opening and a closing tag. In the case of a `<div>` tag, it would look like this:
```html
<div> some content here </div>
```
Notice the addition of a forward slash `/` to close the tag, i.e. `</div>`. It's important to always mind your closing tags as HTML elements are nested within other elements. Most text editors will help you close your tags automatically with auto-complete. 



Here are some other examples of HTML `tags`:
- `<!DOCTYPE>` - declares the document type, arcane, necessary? 
- `<head>` - used for metadata about the page, SEO, including other files, style sheets, etc.
- `<body>` - where the bulk of the page's actual 'content' will go
- `<footer>` - occasionally included but not necessary
- `<div>` - a generic divider or unit in the layout
- `<h1>, <h2>, ...<h6>` - text headings of various sizes   
- `<p>` - paragraph, has default properties pertaining to text
- `<a>` - hyperlink, how to define a link, i.e. [google.com](https://google.com)
- `<img>` - images, these include a `src` attribute for file path
- `<video>` - these also include a `src` attribute for file path
- `<audio>` - these include a `src` attribute for file path
- `<input>` - a flexible element, could be a text input, button, or other...
- `<button>` - the text/label for the button goes in between the opening and closing tags
- `<span>` - a swiss army knife for working with text
- `<li>` - lists, there are also unordered lists, tables, etc.
- `<canvas>` - remember me from p5??   
...

>Here is a [comprehensive alphabetical list of HTML tags](https://www.w3schools.com/TAGS/default.asp) from W3 Schools.

### CSS

CSS is used to style the HTML elements. This gives us control over every conceivable visual aspect including color, size, and spacing, but also how the elements animate into view, like fading in or out or sliding on or off of the screen. 

>There have been [many advancements](https://animista.net/) in recent years with CSS animations if you wanna go deep!

CSS code itself has its own special syntax and can be written from within an HTML document, or included in its own file, typically a `style.css` document. To write CSS in an HTML doc, we enclose the code inside of a special `<style>` tag, like so:

```HTML
<style> 
    CSS goes here 
</style>
```
In order to apply the CSS to certain elements, we use `selectors`. They can target  HTML elements as a whole, like all of the `<div>` elements in a document, like so:
```HTML
<style>
    div {
        color: red;
        font-size: 24px;
    }
</style>
```
Now, any text within a `<div>` element that occurs after this code will be red and be 24 pixels in height. 
>I am careful to say *after this code* because, as we know, code is executed from top to bottom. For this reason, the CSS is usually included in the `<head>` so that all of the page shares the same style.

Alternatively, we can target user-defined set of elements that we designate in our HTML. If we want to color the titles of sections in an article we are writing, we can assign those titles a `class`
To help you keep track and target certain of your elements, the `class` attribute is often added, as below. These will come into play more as we use CSS.
```html
<div class="outer element">
    <p class="inner element">
        An example of a nested paragraph element.
    </p>
</div>
```

In-class exercise:
1) Using the HTML boilerplate page as a starting point, quickly work up an About Me page. The page should include:
    - Title (your name perhaps or a pithy quip about yourself - *Gen Z introvert on the verge of complete public meltdown*🍦🤸🏼‍♂️✌️)
    - Hometown(s)
    - Educational background
    - A short story about what you did this summer, or perhaps a trip you recently took
    - Previous Occupation(s)
    - Hobbies
    - Interests
    - Pictures  
    - Videos 
2) Do not worry about making the page "look good". We are just making a list right now. We will use CSS to change the style later.
 

📕 **Reading - due before class on Tue Sep 12th:** 

Read Emma Rae Rorton's [hand coding round robin](https://doodybrains.github.io/hand-coding-round-robin/) workshop guide for inspiration. We will run a shortened version of this workshop in class on Tuesday, so please prepare as indicated in the workshop guide, i.e. have a code editor installed, be ready for others to work on your computer, etc. Also, please read the 'not required' reading. 🙃 

Also, you can take a look at the HTML code for this workshop, which is a Github pages site. The link to the repo is derived from the code repository name `hand-coding-round-robin` and the username `doodybrains`, i.e. https://github.com/doodybrains/hand-coding-round-robin. From there, you can choose, "view code" and navigate down to the [index.html](https://github.com/doodybrains/hand-coding-round-robin/blob/master/index.html) file. From here, you can see how the page is laid out and all the CSS styling. It's ok if there are things you don't understand. Try to Google them, reference the W3 Schools site, or just don't get hung up and skip them for now.

Lastly, if you're not familiar with [School For Poetic Computation](https://sfpc.io/) (SFPC), check them out! They regularly do shows of student work which are always inspiring and thought-provoking. Lots of ITP/IMA alums are involved there as well.

⏱ *Approx. time to complete: 45 minutes to 1 hour* 


## The CSS Box Model

Assignment 1 

We will create a Github account, if you don't already have one already. From here, we will create a repo for the class where you will be posting your work. This will be for Module 1, so make a folder called `01-foundations` and call this file `about-me.html`. 


Do a 'Final' version of your About Me page. Upload your index.html file to Finish your About Me page. 

📌 **Assignment 1 📌 - due before next class on Thurs DATE:** 

Hand-code your own About Me page using the HTML tags and CSS stylings that we learned about in class today. You can include any information you would like, but there should be at least 5 minutes worth of reading material on the page, including some artwork or creative output that you have created while in school. etc etc. Try to explore styling choices that we did not go over in class, the more obscure the better. We will remix these in class later in the week, so don't stress too much if it's perfect or not. This is an exercise for you to get your hands dirty. Try to insert a number of gifs and animations, short videos, images, etc into the page.

⏱ *Approx. time to complete: 3 hours* 
Submit your assignment on [this form](https://forms.gle/qFmdmwFxJA1Jccs16).

## Module 2 - 🍦 Vanilla & Asynchronous Javascript  

## Module 3 - Working with External Libraries  

## Module 4 - Working with Graphics & Pixels  

## Module 5  - Coding with Generative AI  

## Module 6 - Developing Locally  

## Module 7 - Using Git and Github  

## Module 8 - Working outside the browser  

## Module 9 - Progressive Web Apps  

## Module 10 - Simple Web Servers  
