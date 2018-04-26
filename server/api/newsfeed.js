const router = require('express').Router();
const FoodTruck = require('../models/FoodTruck.js');

//Gets all the food trucks
module.exports = function (app) {
  router.get('/home', function (req, res) {
    console.log('i am here');
    var posts = FoodTruck.getAllTrucks().then((trucks) => {
      console.log('trucks are ' + trucks);
      var info = trucks.map((truck) => {
        return truck;
      });
      return Promise.all(info).then((info) => {
        console.log('info is' + info);
        res.send({res: 'success', data: info});
    }).catch((err) => {
      res.send({res: 'failure', data: err});
    });
  });
});

router.post('/createpost', function (req, res) {
  var name = req.body.foodTruckName;
  var foodPic = req.body.foodPic;
  var content = req.body.content;
  var menu = req.body.menu;
  var openTime = req.body.openTime;
  var closeTime = req.body.closeTime;
  FoodTruck.createTruck(name, foodPic, content, menu, openTime, closeTime).then((truck) => {
    res.send({res: 'success', data: truck});
  }).catch((err) => {
      res.send({res: 'failure', data: err});
    });
  });
  return router;
}
