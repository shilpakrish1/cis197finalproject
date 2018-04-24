export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGIN_ALREADY = 'LOGIN_ALREADY'

export function errorLoggingIn(error) {
  return {
    type: LOGIN_FAILED,
    error: error,
    message: 'Username or password incorrect. Please try again.'
  }
}

export function successLoggingIn(token) {
  return {
    type: LOGIN_SUCCESS,
    token: token,
    message: 'You are logged in.'
  }
}

export function loggedIn() {
  return {
    type: LOGIN_ALREADY,
    message: 'You have already logged in.'
  }
}

export function errorRegistering(message) {
  return {
    type: REGISTER_FAILED,
    error: message,
    message: 'Username already taken, please try again.'
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
  console.log('here with info ' + info);
  return dispatch => fetch('/signin', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(info)})
    .then(response => response.json())
    .then((res) => {
      console.log('received response')
      console.log('res is ' + JSON.stringify(res));
      if (res.success) {
        console.log('this was a successful login');
        localStorage.setItem('token', res.token)
        dispatch(successLoggingIn(res.token))
      }
      else {
        console.log('There was an error with logging you in.')
        return Promise.reject(res.message);
      }
    }).catch((error) => {
       console.log('We could not post the request.')
       dispatch(errorLoggingIn(error))
     })
}

export function registerUser(info) {
  return dispatch => fetch('/signup', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)})
  .then(response => response.json())
  .then((res) => {
    console.log('received a response');
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
