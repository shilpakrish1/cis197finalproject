'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tweetActions = require('../actions/tweetActions');

// TODO: createa  reducer function named tweetListReducer with initial state
// { ids: [] }.
// When the LOADTWEETS_FUL action occurs, set ids equal to justt he tweetId
// for all the tweets from the action
// STUB
var tweetListReducer = function tweetListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ids: []
  };
  var action = arguments[1];

  switch (action.type) {
    case _tweetActions.LOADTWEETS_FUL:
      return {
        ids: action.tweets.map(function (t) {
          return t.tweetId;
        })
      };
    default:
      return state;
  }
};
// ENDSTUB

exports.default = tweetListReducer;