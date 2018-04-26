const jwt = require('jsonwebtoken');
const User = require('../models/user');


//Runs the isAuthenticated middleware=
module.exports = (app) => {
  return function (req, res, next) {
    console.log('authenticating');
    var token = null;
    if (req.body.token) {
      token = req.body.token;
    }
    else  if (req.query.token) {
      token = req.query.token;
    }
    else if (req.headers['auth-token']) {
      token = req.headers['auth-tokens'];
    }
    next();
  }
};
