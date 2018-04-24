const router = require('express').Router();
const FoodTruck = require('../models/FoodTruck.js');

//Gets all the food trucks
module.exports = function (app) {
  router.get('/home', function (req, res) {
    console.log('trying');
    var posts = FoodTruck.getAllTrucks().then((trucks) => {
      var info = trucks.map((truck) => {
        return truck;
      });
      return Promise.all(info).then((info) => {
      res.send({res: 'success'});
    }).catch((err) => {
      res.send({res: 'failure', data: err});
    });
  });
  return router;
}
