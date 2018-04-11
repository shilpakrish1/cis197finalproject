'use strict';

Object.defineProperty(exports, "__esModule", {
                                  value: true
});

var _redux = require('redux');

var _authReducer = require('./authReducer.js');

var _authReducer2 = _interopRequireDefault(_authReducer);

var _messageReducer = require('./messageReducer.js');

var _messageReducer2 = _interopRequireDefault(_messageReducer);

var _tweetListReducer = require('./tweetListReducer.js');

var _tweetListReducer2 = _interopRequireDefault(_tweetListReducer);

var _tweetReducer = require('./tweetReducer.js');

var _tweetReducer2 = _interopRequireDefault(_tweetReducer);

var _discoverReducer = require('./discoverReducer.js');

var _discoverReducer2 = _interopRequireDefault(_discoverReducer);

var _profileReducer = require('./profileReducer.js');

var _profileReducer2 = _interopRequireDefault(_profileReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: you should somehow * combine reducers * hint hint
// so that the reducer looks like
// {
//  authReducer: { isAuthenticated: ...  }
//  tweetList:  { ids: [...] }
//  tweet: { id1: {...}, id2: {...} ... }
//  profileReducer: { profile: { name: '', species: '' ... }}
//  messageReducer: { messages: [ { messageType: ..., message: ...}, ...] }
//  discoverReducer: { discovers: [...] }
// }
// store this reducer in a variable 'tweetApp'
var tweetApp = (0, _redux.combineReducers)({ authReducer: _authReducer2.default,
                                  messageReducer: _messageReducer2.default,
                                  tweetListReducer: _tweetListReducer2.default,
                                  tweetReducer: _tweetReducer2.default,
                                  profileReducer: _profileReducer2.default,
                                  discoverReducer: _discoverReducer2.default });

exports.default = tweetApp;