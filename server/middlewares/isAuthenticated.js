const jwt = require('jsonwebtoken');
const User = require('../models/user');


//Runs the isAuthenticated middleware=
module.exports = (app) => {
  return function (req, res, next) {
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
    if (token) {
      jwt.verify(token, app.secret, (err, decoded) => {
        if (!err) {
          req.user = User.findOne({_id: token.payload.id});
        } else {
            res.send({success: false, message: 'Token failed to authenticate'});
        }
      });
    } else {
        res.status(403).send({success: false, message: 'No token'});
    }
  };
};
