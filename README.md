# Project Updates

## Overview
My current project, developed entirely from scratch using Vue and Firebase, represents a significant milestone in my coding journey. Here are the latest updates on its development:

### Update 1: Sign Up Form
The Sign Up form is now fully functional. I've implemented a mechanism to prevent users from signing up with the same email and password multiple times.

### Update 2: Resolving Major Issues
#### 1. URL Display Issue
I encountered a challenge where unique user IDs were visible in the URL, but the corresponding page was not loading. After careful investigation, I realized that I overlooked a crucial detail—I hadn't added the `<router-view />` in the `App.vue` template. This simple addition resolved the problem.

#### 2. User Email Display
Another major issue involved the unique email of the user not appearing on the screen after login. After exploring various solutions, I decided to change my approach. Instead of using "params" (as I did for displaying the ID), I opted for the "query" property in the router to pass additional parameters. This adjustment successfully addressed the problem, and now users can see both their unique email and ID displayed as confirmation after signing up or logging in.
