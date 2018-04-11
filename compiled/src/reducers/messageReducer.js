'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO: createa reducer function messageReducer that has  an initialState
// { messages: [] }
// If any action has a property 'error' on it, then append to the messages
// array a new object
//    { messageType: 'error' if the  action has an error  property else 'info',
//      message: action.error if an error else action.message
//    }
// Also handle the case where the action type is DISMISS
// if that happens, then remove from the messages array the index supplied
// with the dismiss  action
// remember all these changes must be immutable (I use mutable language
// terms for simplicity

var messageReducer = function messageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { messages: [] };
  var action = arguments[1];

  if (action.error != null) {
    var obj = state.messages.slice();
    obj.push({ messageType: 'error', message: action.error });
    return Object.assign({}, state, { messages: obj });
  } else if (action.type == 'DISMISS') {
    var obj = state.messages.slice();
    obj.splice(action.idx, 1);
    return Object.assign({}, state, { messages: obj });
  } else if (action.message) {
    var obj = state.messages.slice();
    obj.push({ messageType: 'info', message: action.message });
    return Object.assign({}, state, { messages: obj });
  }
  return state;
};

exports.default = messageReducer;