# kick-the-bucket

## Technologies used
- Node.js, Mongoose, Express, and React

## Collaborators
- Kevin Coleman
- Rachel Taima

## About
- Kick the Bucket is an app for tracking a user's bucket list items and their progress of completing an item.

### Approach Taken:
1. May 11 2021:
  - Created an idea, what features we would want the app to have, spoke about the process and the due dates regarding how far the app should be.
  - Wireframing. Created the flow of how the user should be able to go through the app
  - drawing out what the app should look like so there is a visual goal to aim for and to plan for when we need to tackle CSS
2. May 12 2021
  - tackled the backend.
  - researched login authentication that will work will with React
  - got the routes to work and created related models.
3. May 13 2021
   - Tackling Login Authentication
   - Login Authentication is hurting my brain. Am I just overthinking it?

### Challenges
1. Login Authentication:
   - The user must be logged in for them to be able to add, edit, and delete an item.
   - set the username to be undefined or an empty string
   - The password is still going to be incrypted.
   - Single Page Applications somewhat hurt my brain.
   - Do you create a function that can be called by POST that will add the user and save it within the database? Since it has been noted by the tech advisor to create login auth within the backend.
   - Does that mean when the login page is being rendered with the function attached to the POST route then there isn't a need for the frontend to do anything kinda? Like I wouldn't create the function with React.
   - Does that mean when the auth has been verified......do I have to create a verified function to use when the user is trying to login?
   - A locate user function???
   - Am I literally overthinking it???
   - When the user logs in, it updates the currentUser with state.
