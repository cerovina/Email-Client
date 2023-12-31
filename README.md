# Project Updates 🚀

## Overview
My biggest project so far which I'm currently working on, using Vue and Firebase. No tutorial. Built from scratch.    
<br> 

## December 2023 📅

### Update 1: Sign Up Form
The Sign Up form is now fully functional. I've implemented a mechanism to prevent users from signing up with the same email and password multiple times.

### Update 2: Resolving Major Issues
#### 1. URL Display Issue
I have encountered two major problems and both have been resolved after many hours of sweet suffering.
The first problem was the fact that unique user ID's could be seen in the URL but the page was not loading. The solution was rather simple and hiding in plain sight - I forgot to add the `<router-view />` in the `App.vue` template.

#### 2. User Email Display
The second problem took a lot more time to solve as it demanded a complete change of approach to how I have been doing things. The issue was in the unique email of the user not appearing on the screen, after they log in. I tried changing the object in methods in App.vue but, in the end, I found a solution online: instead of using "params" (like I did to display the ID), I opted to use the "query" property in the router to pass additional parameters.

#### Current state of the app
The user can now sign up, creating a unique account, and having both their unique email and ID displayed, as confirmation.  
<br> 

## January 2024 📅

### Update 3: Profile Design
The user now has a profile which resembles Gmail, although simplified. I added components on which I will be working on in the future, adding functionalities to each of them (Compose, Inbox, Sent and Trash). The user now also has an option to add a profile picture which will be displayed over the placeholder square, once added. I named the app PearLink.
