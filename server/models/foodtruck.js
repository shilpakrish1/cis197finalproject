const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates a new FoodTruckSchema
const FoodTruckSchema = new Schema({
  foodTruckName: {type: String, required: true},
  foodPic: {type: String},
  content: {type: String, required: true},
  menu: [{type: String}],
  openTime: {type: String},
  closeTime: {type: String},
  latitude: {type: String},
  longitude: {type: String}
});

//Creates a new food truck tweet
FoodTruckSchema.statics.createTruck = function (foodTruckName, foodPic, content, menu, openTime, closeTime, latitude, longitude) {
  var newTruck = new this({
    foodTruckName: foodTruckName,
    foodPic: foodPic,
    content: content,
    menu: menu,
    openTime: openTime,
    closeTime: closeTime,
    latitude: latitude,
    longitude: longitude
  });
  console.log('new truck is ' + newTruck);
  return newTruck.save().then(function (savedTruck) {
    return savedTruck;
  });
};

FoodTruckSchema.statics.getAllTrucks = function () {
  console.log('returning trucks');
  return this.find();
}

module.exports = mongoose.model('FoodTruck', FoodTruckSchema);
