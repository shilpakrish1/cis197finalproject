const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('./config');
const accountRoutes = require('./api/account.js');
const profileRoutes = require('./api/profile.js');
const newsRoutes = require('./api/newsfeed.js');

mongoose.connect('mongodb://localhost:27017/foodjs');
mongoose.Promise = global.Promise;

const app = express();
app.set('superSecret', config.secret);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('api/account', accountRoutes(app));

app.use('api/profile', profileRoutes(app));

app.use('api/newsfeed', newsRoutes(app));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on ' + (process.env.PORT || 3000));
});

// export app for testing purposes
module.exports = app;
