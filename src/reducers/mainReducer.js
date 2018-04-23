import { combineReducers } from 'redux';
import authReducer from './authReducer.js'
import alertsReducer from './alertsReducer.js'
import markerReducer from './markerReducer.js'

const tweetApp = combineReducers({authReducer,
                                  alertsReducer,
                                  markerReducer});

export default tweetApp;
