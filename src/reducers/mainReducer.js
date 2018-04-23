import { combineReducers } from 'redux';
import authReducer from './authReducer.js'
import alertsReducer from './alertsReducer.js'
import markerReducer from './markerReducer.js'
import FoodTruckReducer from './FoodTruckReducer.js'
import FoodTruckListReducer from './FoodTruckListReducer.js'


const tweetApp = combineReducers({authReducer,
                                  alertsReducer,
                                  markerReducer,
                                  FoodTruckReducer,
                                  FoodTruckListReducer});

export default tweetApp;
