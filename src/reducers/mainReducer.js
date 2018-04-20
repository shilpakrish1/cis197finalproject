import { combineReducers } from 'redux';
import authReducer from './authReducer.js'
import alertsReducer from './alertsReducer.js'

const tweetApp = combineReducers({authReducer, alertsReducer});

export default tweetApp;
