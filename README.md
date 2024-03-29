The project “Twitter Clone: REACTOR” uses a non-relational database, 
NoSQL to create a live dynamic website which works similarly to some 
popular social media websites. REACTOR allows creation of new user 
accounts, logging in to accounts, posting, liking, commenting on posts, 
adding bio and profile images.

The database being a non-relational database can scale both vertically and 
horizontally. The database contains collection models for users, posts, 
comments and notifications with collections often referring to other 
collections. 

The project uses API-first development patterns with ‘document store’ 
style where data is stored in the forms of json based documents. An 
application-centric approach is chosen, and the collections are designed as 
per the format the data will be queried by the application. 
All-inclusively, this project provides experience over database management 
techniques with approaches distinct from the traditional relational database
systems and how these can be used practically in a web application.

This project uses MongoDB, NextJs, ReactJs with typescript, ExpressJs, 
nextAuth, prisma for Visual Studio Code, Bcrypt, swr, react-icons, axios,
date-fns, react-hottoast, react-spinners and react-dropzone.

LIMITATIONS 
  Currently loading large amounts of data at once makes the web app slower. 
  Also, choosing a free version of mongoDB also makes the application slower to load.
  Reactor first loads the application then uses nextAuth to check if the user is logged in. Ideally, both should happen at the same time or first the login constraint should be checked.
FUTURE WORK:
• Backend to display the users who have followed a user and 
liked a post is present. Frontend to display the same can be 
done to display the lists in profile and post sections.
• Adding a search tab on the SideBar to search for users based 
on usernames or name.
• Display username in notifications.
• Adding a messaging feature to message other users in your 
following list.
• Backend to be post media as posts is ready. Adding the feature 
to able to post images and videos can be done.
• Adding an explore tab in SideBar to see posted videos.
• Hosting this app on Firebase or Hostinger.
• Building a docked version of the application
