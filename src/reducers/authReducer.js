import { LOGIN_FAILED,
         LOGIN_SUCCESS,
         REGISTER_FAILED,
         REGISTER_SUCCESS,
         LOGOUT_SUCCESS
       } from '../actions/authActions.js';

const authReducer = (state={isAuthenticated: localStorage.getItem('token') ? true : false, already: []}, action) => {
  switch (action.type) {
    case 'LOGIN_FAILED':
      return Object.assign({}, state, {isAuthenticated: false});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {isAuthenticated: true});
    case 'REGISTER_FAILED':
      return Object.assign({}, state, {isAuthenticated: false});
    case 'REGISTER_SUCCESS':
      return Object.assign({}, state, {isAuthenticated: true});
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {isAuthenticated: false});
    case 'LOGIN_ALREADY':
      var obj = state.already.slice();
      obj.push('true');
      return Object.assign({}, state, {isAuthenticated: true, already: obj});
    default:
      return state
  }
}

export default authReducer;
