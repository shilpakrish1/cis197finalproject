const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');


//Posts to create a tweet
module.exports = (app) => {
  app.use(isAuthenticated(app));

  router.get('/feed', function (req, res) {
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
}
