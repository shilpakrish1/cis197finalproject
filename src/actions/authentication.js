export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function errorLoggingIn(error) {
  return {
    type: LOGIN_FAILED,
    error: error,
    message: 'Login failed. Please try again.'
  }
}

export function successLoggingIn(token) {
  return {
    type: LOGIN_SUCCESS,
    token: token,
    alert: 'You are logged in.'
  }
}

export function errorRegistering(message) {
  return {
    type: REGISTER_FAILED,
    error: error,
    message: 'Registration failed, please try again.'
  }
}

export function successRegistering(token) {
  return {
    type: REGISTER_SUCCESS,
    token: token,
    message: 'Account creation successful. You are logged in.',
  };
}

export function logOut() {
  localStorage.removeItem('token')
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticated: false,
    isFetching: false,
    message: 'You have logged out.',
  };
}

export function loginUser(info) {
  return dispatch => fetch('/account/signin', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(info)})
    .then(response => response.json())
    .then((res) => {
      if (res.success) {
        localStorage.setItem('token', res.token)
        dispatch(successLoggingIn(res.token))
      }
      else {
        dispatch(errorLoggingIn(error))
        return Promise.reject(res.message);
      }
    }).catch((error) => {
       dispatch(errorLoggingIn(error))
     })
}

export function registerUser(info) {
  return dispatch => fetch('/account/signup', {method: 'POST', headers: {'Content-Type': 'applicaiton/json'}, body: JSON.stringify(info)})
  .then(response => response.json())
  .then((res) => {
    if (res.success) {
      localStorage.setItem('token', res.token);
      dispatch(successRegistering(res.token))
    }
    else {
      dispatch(errorRegistering(res.message));
      return Promise.reject(res.message);
    }
  }).catch((err) => {
      dispatch(errorRegistering(err));
  })
}
