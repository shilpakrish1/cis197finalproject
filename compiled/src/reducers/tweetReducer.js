'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tweetActions = require('../actions/tweetActions');

// TODO: createa  reducer called tweetReducer that has an initalState {}
// if the LOADTWEETS_FUL action occurs, make sure that your eventual
// state would look like
// {
//  whateverTheTweetId: { fullTweetObj },
//  whateverTheTweetId2: { fullTweetobj2 }
//  ...
// }
// basically i should be able to do state[someTweetId] and get the
// full tweet object containing that tweet
// on the CREATETWEET_FULa nd FAVORITE_FUL actions, just  set the
// tweet in the state equal to the data you get from the action
//  tweets: resp.data,

var tweetReducer = function tweetReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'LOADTWEETS_FUL':
      var obj = _extends({}, state);
      action.tweets.map(function (i) {
        obj[i.tweetId] = i;
      });
      return obj;
    case 'CREATETWEET_FUL':
      return Object.assign({}, state, action.data);
    case 'FAVORITE_FUL':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

exports.default = tweetReducer;