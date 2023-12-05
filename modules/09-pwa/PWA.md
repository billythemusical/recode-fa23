# Progressive Web Apps

[CLASS RECORDING HERE](https://nyu.zoom.us/rec/share/vJgysbf-a8lkR4tc2kQbBmqK5SU3Qo63m-OEgjJ_ZDEOgM8-V564d0yZ93lSE9GC.-UlnBJHulx1_dbkx?pwd=sgwETgzgkvLfoviHENSKgnLg-9S3ldxH) - Login required, I will be taking attendance based on who is logged in and views the recording.

>Note: At ~51:00 when we get to the subject of the manifest.json file, I was looking at the wrong web page. Please refer to the correct page [here](https://developer.mozilla.org/en-US/docs/Web/Manifest#members). (I was looking at the manifest.json reference for browser extensions which has slightly different specifications.)

### Overview

Progressive Web Apps allow us to create installable applications, leveraging the expanding functionality and built-in security features of the web browser. PWA's leverage the expanding functionality and built-in security features of the web browser while also providing a flexible user experience depending on the target platform, whether it be desktop or mobile. They are also able to mimic traditional software applications, with some limitations, without the developer overhead of app store approval, security checks, and cross-platform compatibility.

Class discussion  
- [Epic Games v. Apple](https://en.wikipedia.org/wiki/Epic_Games_v._Apple)
- [Tweets that don't age well](https://twitter.com/jack/status/1595864501437583367?s=20&t=AZrZvlU99AdRr_TZEzhM9A)
- [PWA Library](https://appsco.pe/)

Code References
- [PWA Boilerplate Repo](https://github.com/billythemusical/recode-pwa-boilerplate)

<img src="" alt="A MacOS Finder window with the local path to Chrome web apps folder - Users/username/Applications/Chrome Apps/'"
 style="display: block;
 margin-left: auto;
margin-right: auto;
width: 75%;
min-width: 200px;" 
/>!['](../../images/pwa-location-desktop.jpg)


Anatomy of a PWA

- [`manifest.json`](https://developer.mozilla.org/en-US/docs/Web/Manifest)
    - a list of all the assets in our app
- `service-worker.js`
    - drives the cache-ing behavior for offline usage, based on the files in the `manifest.json` 
- custom icons
    - 

CSS Considerations

[Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) help us understand what type of device our app is being viewed on. These apply as well to regular browsers, but PWA's have a few [special cases](https://web.dev/learn/pwa/app-design#media_queries) which we can read about here. When in play, we can specify custom CSS to handle these cases. Here is an [additional resource](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) on media queries.

Debugging

- [Debugging on Web Pages on Mobile Devices](debuggin-on-mobile.md)
- [Lighthouse PWA Audits](https://developer.chrome.com/docs/lighthouse/pwa/)
    - An open-source tool for improving the quality of your web apps
    - Has specialized PWA tool


Assignment 

Build Your Own PWA

- Roll your own, a timer app with custom sounds and feedback, 

Considerations for mobile interactions like touch