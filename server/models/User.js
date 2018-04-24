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
  console.log('adduing user');
  var newUser = new this({
    username: username,
    name: name,
    password: 'password',
    email: email
  });
  return bcrypt.hash(password, 10).then((hash) => {
    newUser.password = hash;
    return newUser.save();
  });
}

//Checks the password
userSchema.statics.check = function (user, password) {
  console.log('finding user with a username');
  return this.findOne({username: user.username}).then((user) => {
    if (user == null) {
      console.log('found no user');
      throw new Error('No User');
    }
    console.log('comparing user');
    return bcrypt.compare(password, user.password);
  }).catch((err) => {
      console.log('error is ' + err);
      return err;
  });
};


module.exports = mongoose.model('User', userSchema);
