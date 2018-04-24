const router = require('express').Router();
const FoodTruck = require('../models/tweet');


//Gets all the food trucks
module.exports = function (app) {
  router.get('/newsfeed', function (req, res) {
    var posts = FoodTruck.getAllTrucks().then((trucks) => {
      var info = trucks.map((truck) => {
        return truck;
      });
    });
      return Promise.all(info);
  }).then((info) => {
      res.send({res: 'success'});
  }).catch((err) => {
      res.send({res: 'failure', data: err});
    });
  });
  return router;
};
