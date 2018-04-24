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
export function addFoodTruck(data) {
  return (dispatch) => {
    authenticatedRequest('POST', '/createpost', data)
    .then(res => res.json())
    .then((resp) => {
      const data = resp.data;
      dispatch({
        type: UPDATEPROFILE_FUL,
        message: 'You have updated your profile and can now check it'
      })
    }).catch((error) => {
        dispatch({
          type: UPDATE_PROFILE_REJ,
          error
      })
    })
  }
}
