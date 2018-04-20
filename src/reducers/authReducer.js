import { LOGIN_FAILED,
         LOGIN_SUCCESS,
         REGISTER_FAILED,
         REGISTER_SUCCESS,
         LOGOUT_SUCCESS
       } from '../actions/authentication';

const authReducer = (state={isAuthenticated: localStorage.getItem('token') ? true : false}, action) => {
  switch (action.type) {
    case 'LOGIN_FAILED':
      return Object.assign({}, state, {isAuthenticated: false});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {isAuthenticated: false});
    case 'REGISTER_FAILED':
      return Object.assign({}, state, {isAuthenticated: false});
    case 'REGISTER_SUCCESS':
      return Object.assign({}, state, {isAuthenticated: true});
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {isAuthenticated: false});
    default:
      return state
  }
}

export default authReducer;
