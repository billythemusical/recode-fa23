---
title: Normal Business Hours
module: 07-servers
---

# Normal Business Hours

>Upload the link to your repo to [this Google form](https://forms.gle/qFmdmwFxJA1Jccs16) before the due date.

<img src="https://thepointsguy.global.ssl.fastly.net/us/originals/2022/07/Times-Square-scaled.jpg" alt="Times Square, Manhattan, NY"
style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 200px;" />

A server that questions the idea of a 24/7/365 internet, where the boundaries between our work, social, and personal lives are non-existent and devices become always-on portals between these worlds.

But now, you control the flow of information from the start - a server that gives your resume only during **normal business hours**.

### Preliminary questions to answer

We should begin by deciding what's most important, what is of the most value. So not considering work, write a bit about the things you value and why and how you would like to invest your time in these things. They could fall into a number of the following categories below, and beyond, but be specific:
- hobbies or personal interests
- social life
- family
- volunteer work
- religious duties
- creative pursuits

Next, with these values at the forefront of your heart and mind, you can hone in on a few more important questions.. 
- Are you working to just make money so you can do other things? (may lead to more limited hours)
- Or are you looking for a job in a field where you are passionate? (may be ok working longer hours)

Then we can get more practical and decide what your normal business hours should be. 
- Are you a morning person, i.e. would 9am-5pm fit your schedule?
- Are you more of a night owl, like 4pm-12am, or later..?
- Or perhaps somewhere in between? 
- Do you want to work 5 days a week, Monday - Friday? 4 days? Which 4 days? etc.
- What holidays do you want to take off? 

Once you have answered these questions, you are ready to proceed.

### Programming the server

#### Forking a repo

The boilerplate code for the normal business hours server can be found [HERE](https://github.com/billythemusical/normal-business-hours). It is recommended to **FORK** this repository so that you can push your changes to your own Github account later. Directions to FORK a repo are [HERE](forking-a-repo.md).

#### Up and running locally

Once forked and running locally, program the server to only serve your resume during your normal business hours. If outside these hours, please craft a `denied.html` file that will be served to prospective employers. **You can consider this file as an opportunity for creativity to make an impression or a plain and simple boundary that provides cursory information on when they can return to see the information they seek.** At the very least, the file should be well-designed and simple - so some HTML/CSS styling will be required.


#### Deploy to droplet

Once the code is functioning properly on your local machine, you'll need to do the following to your droplet:
1. Log in to your droplet terminal from the Digital Ocean console.
2. Upload the working code using `git clone`
  - Instructions are [here](../06-developing-locally/digital-ocean-droplet.md#cloning-a-github-repository) from the notify assignment, starting with "Cloning a github repository". 
  - You can ignore the `.env` file stuff for this though.
3. Allow port 3000
  - The droplet will also need to allow port 3000 to receive traffic from the web, so we'll need to run this command in our droplet terminal:
    ```bash
    ufw allow 3000
    ```
4. Run your server with `pm2 start app.js`
5. Check pm2 for errors `pm2 monit`
6. Visit your server at `http://XX.XX.XX.XX:3000` where `XX.XX.XX.XX` is your Reserved IP address.


#### Submitting your work

- You can submit the new FORKED repo that you made from above or make a new repository called **07-assignment**. Either is fine. This repo should have the server code you wrote in it. 
- Use the README to answer the questions above. 
- Provide a link at the top of your README page that links to your server that is running on digital ocean. It should look like this `http://XXX.XX.XX.XX:3000/` where you have replaced `XXX.XX.XX.XX` with your static IP address.

Upload the link to your repo to [this Google form](https://forms.gle/qFmdmwFxJA1Jccs16) before the due date.

<hr>

>Want more of a challenge? 
>- Use `ejs` to programmatically render your business hours into the `denied.html` page so that they update as your server updates.
>- Try programming your vacation days into the server using additional conditional statements and checking for specific dates of the year like Labor Day, Indigenous People's Day, etc.