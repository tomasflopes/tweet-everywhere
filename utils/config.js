const twitter = require('twitter');
const settings = require('./settings');

module.exports = new twitter(settings);
