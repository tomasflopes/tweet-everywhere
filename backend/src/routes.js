const { Router } = require('express');
const passport = require('passport');
const { Strategy } = require('passport-twitter');

const mute = require('./controllers/mute');
const tweetar = require('./controllers/tweetar');
const listTweets = require('./controllers/listTweets');

passport.use(new Strategy({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackURL: process.env.CALLBACK_URL,
  includeEmail: true,
},
  (token, tokenSecret, profile, cb) => {
    return cb(null, { token, tokenSecret });
  }
));

const routes = Router();

routes.get('/auth/twitter',
  passport.authenticate('twitter'));

routes.get('/auth/twitter/callback',
  passport.authenticate('twitter', { session: false }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect(`http://localhost:3000/${req.user.token}/${req.user.tokenSecret}`);
  });

routes.get('/timeline/:token/:secret', listTweets);
routes.post('/mute', mute);
routes.post('/tweetar/:token?/:secret?', tweetar);

module.exports = routes;
