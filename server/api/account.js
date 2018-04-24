const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  const accountRoutes = express.Router();

  //Signs up a user
  accountRoutes.post('/signup', (req, res) => {
    User.addUser(req.body.username, req.body.name, req.body.password, req.body.email).then((user) => {
      var tkn = jwt.sign({id: user._id}, app.get('superSecret'));
      res.send({success: true, token: tkn});
    }).catch((err) => {
      res.send({success: false, message: 'Error registering you'});
    });
  });

//Signs in a user
accountRoutes.post('/signin', (req, res) => {
  return User.findOne({username: req.body.username}).then((user) => {
    if (user) {
      User.check(user, user.password).then((value) => {
        if (value) {
          let payload = {id: user._id};
          var tkn = jwt.sign(payload, app.get('superSecret'));
          res.send({success: true, message: 'Authentication success', token: tkn});
        }
        else {
          res.send({success: false, message: 'Wrong password'});
        }
      }).catch((err) => {
          res.send({success: failed, message: 'No user'});
        }
      }
      else {
        res.send({success: false, message: 'Auth failed, no user'});
      }
    }).catch((err) => {
      res.send({sucess: false, message: 'Auth failed, no user'});
    }));
  });
  return accountRoutes;
};
