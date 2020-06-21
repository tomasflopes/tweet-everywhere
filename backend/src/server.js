const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(passport.initialize());
app.use(session({
  name: 'qid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 24 * 7 // 7 days
  }
}))

app.use(routes);

module.exports = app;
