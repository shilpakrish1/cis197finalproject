const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//Defines the user schema
let userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: String,
  email: String
});

//Adds a user
userSchema.statics.addUser = function (username, name, password, email) {
  return bcrypt.hash(password).then(function (hash) {
    var newUser = new this({
      username: username,
      name: name,
      password: hash,
      email: email
    })
    return newUser.save();
  }
}

//Checks the password
userSchema.statics.check = function (username, password) {
  return this.findOne({username: username}).then((user) => {
    if (user == null) {
      throw new Error('No User');
    }
    return bcrypt.compare(password, this.password);
  });
};


//Updates a user profile
userSchema.statics.updateUserProfile = function (username, password, name, email) {
  return this.findOne({_id: id}).then(function (user) {
    user.username = username;
    user.password = password;
    user.name = name;
    return user.save();
  });
};


module.exports = mongoose.model('User', userSchema);
