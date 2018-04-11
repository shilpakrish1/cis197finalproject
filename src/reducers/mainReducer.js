import { combineReducers } from 'redux';
import authReducer from './authReducer.js'
import messageReducer from './messageReducer.js'
import tweetListReducer from './tweetListReducer.js'
import tweetReducer from './tweetReducer.js'
import discoverReducer from './discoverReducer.js'
import profileReducer from './profileReducer.js'

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
const tweetApp = combineReducers({authReducer,
                                  messageReducer,
                                  tweetListReducer,
                                  tweetReducer,
                                  profileReducer,
                                  discoverReducer});

export default tweetApp;
