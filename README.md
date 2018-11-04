# PudgyTech-React-Boilerplate

This is my react-boilerplate

# Run
npm start-dev :: runs webpack -w and nodemon

## Setup

npm install
npm start

# Clean house

npm run clean - clears out /dist
npm install - install npm again for a clean setup
npm run build - rebuilds webpack


# To use this PudgyTech-React-Boilerplate, you'll need to take the following steps:

Don't fork or clone this repo! Instead, create a new, empty directory on your machine and git init (or create an empty repo on Github and clone it to your local machine)
Run the following commands:
git remote add boilermaker https://github.com/ShaneECDavis/pudgytech-boilerplate.git
git fetch boilermaker
git merge boilermaker/master
Why did we do that? Because every once in a while, boilermaker may be updated with additional features or bug fixes, and you can easily get those changes from now on by entering:

git fetch boilermaker
git merge boilermaker/master



// Not sure if below is needed
By default, running npm test will use boilermaker-test, while regular development uses boilermaker
Create a file called secrets.js in the project root

This file is .gitignore'd, and will only be required in your development environment
Its purpose is to attach the secret env variables that you'll use while developing
However, it's very important that you not push it to Github! Otherwise, prying eyes will find your secret API keys!
It might look like this:
  process.env.GOOGLE_CLIENT_ID = 'hush hush'
  process.env.GOOGLE_CLIENT_SECRET = 'pretty secret'
  process.env.GOOGLE_CALLBACK = '/auth/google/callback'