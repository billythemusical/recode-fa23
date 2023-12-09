---
title: Debugging Web Pages on Mobile Devices
module: 09-pwa
---

# Debugging Web Pages on Mobile Devices

[Part 1: Debugging on Safari (iOS)](#part-1-debugging-on-safari-ios)  
[Part 2: Debugging on Android](#part-2-debugging-on-chrome-android)

>You will need a USB cable to attach your mobile device to your desktop or laptop.

## Overview

Debugging on mobile devices can be difficult because the small screen size and lack of traditional keyboard, among other things. So we usually tether our devices to a laptop or desktop via USB and watch the console there. Here's how to set that up on both iOS and Android. I have tested this on iOS, but not on Android though, so please let me know ASAP if this is working or not for the latter.

### Part 1: Connecting to a locally developed web page

Before you deploy your site, you'll need to visit it on your mobile device as you're building it. To do so, you have to do a few things:

1. Make sure your mobile device and computer are on the same wifi network. 
2. Find the IP address of your computer (in MacOS, it's in System Preferences > Network)
3. Launch Live Server in VS Code or run nodemon in the folder you want to serve.
4. Visit the IP address of your computer in your mobile device's web browser, typically http://192.168.1.XXX and the port. You'll also likely be working on a locally-hosted version of your project, so you'll need to track down your local IP address and visit that on your mobile device's browser for development. Typically that's `http://192.168.1.XXX:<port>` where `<port>along with the port.

Here's a demo [video](https://urldefense.proofpoint.com/v2/url?u=https-3A__nyu.zoom.us_rec_share_Avkvx4bvoqbDsULNUo9rknc7Ne06YM-5FHdtnuWZi8EJALTA0aZ2-2DXkjVXx949Vd5b.aaXYqLEXa6CTpDey-3Fpwd-3DnqOyLWTQKPo0LZHWaFjfHk8EhpJ-2DA3NK&d=DwMFAw&c=slrrB7dE8n7gBJbeO0g-IQ&r=wTFzgo36J-q7d-kMhnr2bg&m=37JwvsPN_g0SiYCZFqtfVCWgvvZBSkkozYEZgpp0bKIwYL6mGn9wBr4lPe9RS8LQ&s=kjmiyb7mepqW3oPObL72nQ_TCu5T4s5j91yfV4Jk_XA&e=) of the setup process in action.

![Image of the MacOS System Network Preferences with red arrows pointing to the local IP address.](../../images/local-ip-address.png)

### Part 2a: Debugging on Safari (iOS)
Objective: Learn how to use Safari's Web Inspector for debugging on iOS devices.

Steps:

1. **Connect iOS Device to Machine:** 
    - Start by connecting your iOS device (iPhone or iPad) to your computer.

2. **Enable Web Inspector on iOS:**
    - Go to Settings > Safari.
    - Scroll down to the bottom and open the Advanced menu.
    - Turn on Web Inspector.

3. **Open Web Page for Debugging:** 
    - On your iOS device, open the Safari browser and navigate to the web page you want to debug.

4. **Enable Develop Menu on Mac:**
    - Launch the Safari browser on your Mac.
    - Click on Safari at the top > Preferences > Advanced.
    - Check the option to Show Develop menu in the menu bar.

5. **Debugging:**
    - In the Safari menu bar, click on Develop.
    - You'll see your connected iOS device and the active URL on Safari.
    - Click on the URL to open a new inspector window, where you can inspect, preview, or debug the page​​.

Reference: [How to Activate the iPhone Debug Console or Web Inspector](https://www.lifewire.com/activate-the-debug-console-in-safari-445798)


### Part 2b: Debugging on Chrome (Android)
Objective: Learn to remotely debug live content on Android devices using Chrome.

Steps:

1. **Prepare Android Device:** 
    - Open the Developer Options screen on your Android and enable USB Debugging.

2. **Setup on Development Machine:**
    - Open Chrome and navigate to chrome://inspect#devices.
    - Ensure Discover USB devices is enabled.

3. **Connect Android Device:**
    - Use a USB cable to connect your Android device to your development machine.
    - If connecting for the first time, accept the debugging session prompt on your Android device.

4. **Debug Content:**
    - Open Chrome on your Android device.
    - On your development machine, go to chrome://inspect/#devices.
    - You will see your Android device's model name and serial number.
    - Click Inspect next to the URL you want to debug. A new DevTools instance will open for debugging​​​​.

5. **Inspecting Elements:**
    - In the DevTools instance, go to the Elements panel.
    - Hover over an element to highlight it on your Android device.
    - You can tap an element on your Android device to select it in the Elements panel of DevTools​

​References: [Remote Debug Android Devices](https://developer.chrome.com/docs/devtools/remote-debugging/)