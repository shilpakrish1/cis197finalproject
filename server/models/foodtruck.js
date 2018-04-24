const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creates a new FoodTruckSchema
const FoodTruckSchema = new Schema({
  foodTruckId: {type: Schema.ObjectId, required: true},
  foodTruckName: {type: String, required: true}
  foodPic: {type: String},
  content: {type: String, required: true},
  menu: [{type: String}],
  openTime: {type: String},
  closeTime: {type: String}
});

//Creates a new food truck tweet
FoodTruckSchema.statics.createTweet = function (foodTruckId, foodTruckName, foodPic, content, menu, openTime, closeTime) {
  var newTruck = new this({
    foodTruckId: foodTruckId,
    foodTruckName: foodTruckName,
    foodPic: foodPic,
    content: content,
    menu: menu,
    openTime: openTime,
    closeTime: closeTime
  });
  return newTruck.save().then(function (savedTruck) {
    return savedTruck;
  });
};

FoodTruckSchema.getAllTrucks() {
  return this.find();
}

module.exports = mongoose.model('Tweet', FoodTruckSchema);
