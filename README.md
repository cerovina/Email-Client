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

### Update 4: Sign In Form
Before tackling the main components, I decided to come back and revisit the authentication part of my app. I didn't want to proceed further until I have a polished start. The user can now not only sign up but also keep the profile and sign in again. This was not possible until now as I didn't have the sign in component which is now appearing first by default. The user can also create an account if they don't have one by clicking the link under the form. The form also recognizes if the user doesn't have an account, with the Firebase feature `signInWithEmailAndPassword` working in the background.

#### A bigger problem I encountered
I had a bigger problem which I couldn't find a solution for online but I managed to find my way around it. When put together in the components section in App.vue, the sign in and sign up form didn't redirect the user to UserProfile.vue. I'm still not entirely sure what caused it but I believe that there was a conflict in the routing, as the moment I removed the `this.$router.push` from App.vue and gave it to both of the components individually, both of them began doing their job - redirecting the user to their profile.  
<br>  
  
## February 2024 📅  

### Update 5: Sending Emails and Database Manipulation
The users can now send emails to each other! The biggest part of the app has been done. The users can now send an email, get a confirmation that it has been sent and be redirected to their sent messages where they can see an overview of all of their sent emails history. All of this is stored in the Firestore and will remain on the profile if the user exits and then logs in again. I have also fixed the reappearing Sign in form by adding a v-if to control where it appears.

#### Database manipulation
I have encountered many issues since the previous update but the biggest one was the authorization. I realized I had to go to my Firebase console and update the "Rules" so that the users are allowed to send messages to each other. Also, I had to learn how to add data - collections, documents and other fields, and how to manipulate them inside of my Vue components.

## May 2024 📅

### Update 6: Inbox is functional - the app's purpose is complete 🍻
The user can now see the received emails in the inbox, allowing them to communicate with each other. The app's main purpose is complete. I did this by adding an async function which fetches emails where the recipient matches the current user's email.
