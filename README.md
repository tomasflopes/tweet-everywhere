# Twitter API

The API used in this project is up to the date of 20/01/2020 and it's the official API provided by Twitter.

# Using the app

In order to use the app you need to create a `settings.js` file inside the `utils` folder and paste your personal unique keys provided by tweeter when you create an App.

## Getting the keys

To get the keys you must create an app at [Twitter Developers](https://developer.twitter.com/en/apps), then it will get you 4 unique keys that you must replace in this sample code.

`module.exports = {
  consumer_key: 'API KEY',
  consumer_secret: 'API Secret',
  access_token_key: 'Access Token',
  access_token_secret: 'Access Token Secret'
}`
