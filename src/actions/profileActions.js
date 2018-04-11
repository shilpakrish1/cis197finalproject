import authenticatedRequest from '../utils/authenticatedRequest';
export const UPDATEPROFILE_FUL = 'UPDATEPROFILE_FUL';
export const UPDATEPROFILE_REJ = 'UPDATEPROFILE_REJ';
export const GETPROFILE_FUL = 'GETPROFILE_FUL';
export const GETPROFILE_REJ = 'GETPROFILE_REJ';
export const FAVUNFAV_FUL = 'FAVUNFAV_FUL';
export const FAVUNFAV_REJ = 'FAVUNFAV_REJ';

// TODO: will send a POST  request  to /api/profile/edit with the data passed into it
// this request will need to be an authenticated request (ref the import at the
// top of the file
// Note that this action creator is asynchronous. Look back at lecture to see
// how you should  structure this function in light of that fact
// From the response, grab the name, species, and image
// dispatch an UPDATEPROFILE_FUL action with additional properties `profile`
// and `message: 'You have updated your profile and can now check it'` In the
// `profile` preoperty of the action, set its value equal to an object with
// properties name, species, and image
// If the request fails/errors, send an action of type UPDATEPROFILE_REJ and
// add an additional property `error` containing the error itself
export function updateProfile(data) {
  return (dispatch) => {
    authenticatedRequest('POST', `/api/profile/edit`, data)
    .then(res => res.json())
    .then((resp) => {
      const data = resp.data;
      var name = data.name
      var species = data.species
      dispatch({
        type: UPDATEPROFILE_FUL,
        message: 'You have updated your profile and can now check it',
        profile: { name, species, image: data.image}
      })
    }).catch((error) => {
        dispatch({
          type: UPDATEPROFILE_REJ,
          error
      })
    })
  }
}


// TODO: async action creator again
// make an authenticated request to the route  that allows us to get profile
// information. (you can ref your express files for this to see what type  of
// request it is and the url pattern (note that you need to handle the case where
// id is empty/undefined and adjust the url accordingly
// When the request is successful, dispatch a GETPROFILE_FUL action with additional
// property `profile` containing  the result of the request relevant (ref your express
// method for what is returned)
// if there's  an error, dispatch a GETPROFILE_REJ action with an addition property `error`
// equal to the error
export function getUser(id) {
  var url = '';
  if (!id) {
    url = '/api/profile/info'
  }
  else {
    url = `/api/profile/${id}/info`
  }
  return (dispatch) => {
    authenticatedRequest('GET', url)
    .then(res => res.json())
    .then((resp) => {
      const data = resp.data;
      dispatch({
        type: GETPROFILE_FUL,
        profile: data
      })
    }).catch((error) => {
        dispatch({
          type: GETPROFILE_REJ,
          profile: error
        })
    })
  }
}

// TODO: async action creatora gain
// make an authenticated request to t he route that allows us to follow
// a user. when this returns, dispatch  a new FAVUNFAV_FUL action with properties
// profile equal to the respnose data and also  a message property that says
// 'You are now ' + following or unfollowing + ' this person'
// else if there is an  error
// dispatch an action FAVUNFAV_REJ  with an error equal  to the error of the
// request


export function favUnfav(id) {
  return (dispatch) => {
    authenticatedRequest('POST', `/api/profile/${id}/follow`)
    .then(res => res.json())
    .then((resp) => {
      const data = resp.data;
      var dat = '';
      console.log(resp.data);
      dispatch({
        type: FAVUNFAV_FUL,
        message: 'You are now following or unfollowing this person'
      })
    }).catch((error) => {
      dispatch({
        type: FAVUNFAV_REJ,
        error: error
      })
    })
  }
}
