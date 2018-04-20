const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: create a new Schema that has the following attributes
//  author, type is Schema.ObjectId, it is required, and it refers to 'User' (look up refs)
//  content, type is String, it is required
//  favorites: is an array of objects. each  object has type Schema.ObjectId and refs 'User'
// also  keep track of the created_at timestamp via http://mongoosejs.com/docs/guide.html#timestamps
//  (we do that last part for you...but just ref it for future use)

const tweetSchema = new Schema({
  author: {type: Schema.ObjectId, required: true, $ref: 'User'},
  content: {type: String, required: true},
  favorites: [{$ref: 'User', type: Schema.ObjectId}]
}, {
  timestamps: {createdAt: 'created_at'}
});

/*  for a given tweet return the following object.
 *  Need currentUserId for figuring out whether given user has favorited tweet
      {
          authorName: ...,
          authorId: ...,
          authorPic: ...,
          content: ...,
          tweetId: ...,
          numFavorites: ...,
          isFavorited: ...
      },
    To populate the model with author data, you can query the User model via this.model('User')...

    Return a promise!!!!
*/
tweetSchema.methods.getTweetInfo = function (currentUserId) {
  return this.model('User').findOne({ _id: this.author })
    .then((res) => {
      let author = res;
      let obj = {
        authorName: author.username,
        authorId: author._id,
        authorPic: (author.image ? author.image.valueOf() : ''),
        content: this.content,
        tweetId: this._id,
        numFavorites: this.favorites.length,
        isFavorited: (this.favorites.indexOf(currentUserId) > - 1) ? true : false
      };
      return obj;
    });
};


/* returns tweet objects made by a user with id = userId
* Return a promise!
* */
tweetSchema.statics.getTweetsForUser = function (userId) {
  return this.find({author: userId});
};


// Find one user with _id matching userId. If there is, iterate through
// the following array for the user and find all tweets made by that individual
// at the end, return a single array of tweet objects (all same level ie must be
// [t1, t2, t3 ... tn] but not [[t1], [t2,  t3] ... ].
// Return a Promise!
tweetSchema.statics.getNewsfeedTweets = function (userId) {
  return this.model('User').findOne({_id: userId}).then((user) => {
    var users = [];
    for (var i = 0; i < user.following.length; i++) {
      users.push(user.following[i]);
    }
    var posts = users.map((user) => {
      return this.getTweetsForUser(user);
    });
    return Promise.all(posts);
  }).then((posts) => {
    let flattened = [].concat.apply([], posts);
    return flattened;
  });
};

// given the current  user id and some content of a new tweet, create a new  tweet object and
// save  it. Then once it saves, return the  result of the tweet.getTweetInfo(currentUserId).
// General format of the method  should be
// let newTweet = instantiate method
// return newTweet.save().then((savedTweet) => { return the  tweet info })
//  Return a Promise
tweetSchema.statics.createTweet = function (currentUserId, content) {
  var user1 = this.model('User').findOne({_id: currentUserId});
  var newTweet = new this({
    author: currentUserId,
    content: content,
    favorites: []
  });
  return newTweet.save().then(function (savedTweet) {
    return savedTweet.getTweetInfo(currentUserId);
  });
};

// given a current user and a tweet id, appropriately add/remove favorites on a given tweet.
// On completion of the save return the tweet info (via getTweetInfo), passing in the currentuser id
// Return a Promise!
tweetSchema.statics.favoriteTweet = function (currentUserId, tweetId) {
  return this.findOne({_id: tweetId}).then((tweet) => {
    var toFavorite = true;
    for (var i = 0; i < tweet.favorites.length; i++) {
      if (tweet.favorites[i] == currentUserId) {
        tweet.favorites.splice(i, 1);
        toFavorite = false;
      }
    }
    if (toFavorite) {
      tweet.favorites.push(currentUserId);
    }
    return tweet.save();
  }).then(function (savedTweet) {
    return savedTweet.getTweetInfo(currentUserId);
  });
};

module.exports = mongoose.model('Tweet', tweetSchema);
