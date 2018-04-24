const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const Tweet = require('../models/tweet');

module.exports = function (app) {
  app.use(isAuthenticated(app));

//Posts to create a tweet
router.post('/createpost', function (req, res) {
  name = req.body.name;
  foodPic = req.body.foodpic;
  content = req.body.content;
  menu = req.body.menu;
  openTime = req.body.opentime;
  closeTime = req.body.closetime;
  FoodTruck.createTweet(req.params).then((truck) => {
    res.send({res: 'success', data: tweet});
  }).catch((err) => {
      res.send({res: 'failure', data: err});
    });
  });
  return router;
};
