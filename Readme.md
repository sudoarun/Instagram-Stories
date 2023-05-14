# Milestone-10: Instagram stories

# Learning competencies:

At the end of this milestone you will learn

- Building native application using React-native
- Deploying web application
- Understanding about web servers

# Problem statement

## What are stories ?

> It's a collection of images and short videos, with optional overlays and effects, that a user can add to over time, but which disappears after 24 hours. Users view a Story in sequence, either waiting out a programmed delay between images or manually advancing to the next.

![Instagram stories](./stories.gif)

In 2013, the upstart social network, Snapchat, debuted Stories. But then Stories were copied by Facebook and introduced to a much wider audience on Instagram in 2016. Facebook itself, as well as its messaging platforms WhatsApp and Facebook Messenger, rolled out Stories in 2017.

Now, Stories are quietly eating the social world, fundamentally changing how we share and consume content on social media. For companies that rely on social media to reach their customers, this presents brand new opportunities—and some real challenges.

Instagram stories has more than [400 million](https://s21.q4cdn.com/399680738/files/doc_financials/2018/Q2/Q218-earnings-call-transcript.pdf) people using it every day. On an average more than 2 out of 5 instagram users are using instagram stories everyday. Check out more interesting statistics about Instagram stories [here](https://mediakix.com/blog/instagram-stories-statistics-changing-social/#gs.y71EyVo)

**Why do you think stories have become this popular ?**

So get ready to build this amazing feature in your milestone. For the reference you can watch out this [video](https://vimeo.com/186306184)

## Releases

### Frontend

1. Start with Wireframing. It's a part of UI of design and an extremely essential process of the web design workflow. You can use **excalidraw** to create a rough version of your wireframing. Decide:  
    1. What views are involved in the app? 
    2. Are you using too many elements? Are the views getting redundant and cluttered?
    3. What buttons/interactions will trigger which other views? 
2. Initialize your react-native project with expo and metro.
3. To set a consistent style, create your theme for the core components that will govern text size for different headings as well as primary and secondary colors.   **
4. Create the following components for your app:
*hint: you can use React Native Core components as well as any third party library like React Native Elements.*  
    1. A List component that will contain the avatars of the people who have uploaded a story. Position your avatars either horizontally like the Insta Stories format, or vertically like whatsapp
    2. A button component which triggers the camera, for the user to upload their own stories.
5. Create a component for showing the different stories on clicking the avatar.
*hint: you can use a modal component to display the stories*  
    
    Now, it's time to set up the camera which will be triggered with a Pressable "button." 
    
6. Implement your Camera component by wrapping it inside a View. 
    
    → Start by adding the necessary permissions that are required to access the hardware camera,  and installing the library of your choice. 
    

*note: you can also use libraries like RNCamera react-native-cameraroll or react-native-image-picker*

1. Deploy and build your app for Android or iOS and ship to their respective stores.

### Backend

1. Discuss database schema to store 2 tables (Users + Stories). What fields would you want to store in both the tables. Inspect element on instagram.com in the browser and check what data the instagram api returns for stories. They may include data for sample user data + Story videos for the users. 
2. Create your API server with Node and Express. 
3. Create your Pool Object that helps you query into your database. 
4. Create basic data access CRUD functions that manipulate the data in each of your respective tables. What will the relation between User and Stories table be?
Reference: https://www.bezkoder.com/sequelize-associate-one-to-many/
Think about:
    - **What effect would each route have on the database?**
    - **What response body would each route return?**
    - **What response code would each route return?**
5. Create APIs that frontend will use to send image and save in the image in the database. Reference: https://www.bezkoder.com/node-js-upload-image-mysql/
6. Write query functions that automatically delete stories within 24 hours. 
7. Create HTTP routes for your CRUD functions so that they can be accessed from your react application.
8. What other tables would you require?
