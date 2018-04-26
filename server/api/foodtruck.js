const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const FoodTruck = require('../models/FoodTruck.js');


module.exports = function (app) {
  app.use(isAuthenticated(app));

//Posts to create a tweet
router.post('/createpost', function (req, res) {
  console.log('loading the truck');
  name = req.body.name;
  foodPic = req.body.foodpic;
  content = req.body.content;
  menu = req.body.menu;
  openTime = req.body.opentime;
  closeTime = req.body.closetime;
  FoodTruck.createTruck(req.params).then((truck) => {
    res.send({res: 'success', data: truck});
  }).catch((err) => {
      res.send({res: 'failure', data: err});
    });
  });
  return router;
};
