# PudgyTech-React-Boilerplate

This is my react-boilerplate

# Run
npm start-dev - runs webpack -w and nodemon

## Setup

npm install
npm run build
npm start

# Clean house

npm run clean - clears out /dist
npm install - install npm again for a clean setup
npm run build - rebuilds webpack


#Customize
Now that you've got the code, follow these steps to get acclimated:

Update project name and description in package.json and .travis.yml files

npm install, or yarn install - whatever you're into

Create two postgres databases: boilermaker and boilermaker-test (you can substitute these with the name of your own application - just be sure to go through and change the package.json and .travis.yml to refer to the new name)

By default, running npm test will use boilermaker-test, while regular development uses boilermaker
Create a file called secrets.js in the project root

This file is .gitignore'd, and will only be required in your development environment
Its purpose is to attach the secret env variables that you'll use while developing
However, it's very important that you not push it to Github! Otherwise, prying eyes will find your secret API keys!
It might look like this:
  process.env.GOOGLE_CLIENT_ID = 'hush hush'
  process.env.GOOGLE_CLIENT_SECRET = 'pretty secret'
  process.env.GOOGLE_CALLBACK = '/auth/google/callback'