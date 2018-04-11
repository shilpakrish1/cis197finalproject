'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tweetActions = require('../actions/tweetActions');

// TODO: create a reducer function called discoverReducer with initialState
// { discovers: [] }
// if the action passed in is DISCOVERBIRDS_FUL then set discovers equal
// to the data  of that action (refer  to the action caller for details on
// what  that means. else just return the state
//

var discoverReducer = function discoverReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { discovers: [] };
  var action = arguments[1];

  if (action.type == 'DISCOVERBIRDS_FUL') {
    return { discovers: action.data };
  } else {
    return state;
  }
};

exports.default = discoverReducer;