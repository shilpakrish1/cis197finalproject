export const UPDATEPROFILE_FUL = 'UPDATEPROFILE_FUL';
export const UPDATEPROFILE_REJ = 'UPDATEPROFILE_REJ';
export const GETPROFILE_FUL = 'GETPROFILE_FUL';
export const GETPROFILE_REJ = 'GETPROFILE_REJ';
export const FAVUNFAV_FUL = 'FAVUNFAV_FUL';
export const FAVUNFAV_REJ = 'FAVUNFAV_REJ';
import authenticatedRequest from '../utils/authRequest';

export function addFoodTruck(data) {
  return (dispatch) => {
    fetch('/api/createpost', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(data)})
    .then(res => res.json())
    .then((resp) => {
      const data = resp.data;
      console.log('data is ' + JSON.stringify(data));
      dispatch({
        type: UPDATEPROFILE_FUL,
        message: 'You have successfully created or edited a post.'
      })
    }).catch((error) => {
        dispatch({
          type: UPDATEPROFILE_REJ,
          message: 'Could not update post. Please try again later.'
      })
    })
  }
}

export function loadTrucks() {
  return(dispatch) => {
    console.log('here1');
    fetch('/api/home')
    .then((res) =>  {
      return res.json();
    })
    .then((resp) => {
      console.log('resp is ' + resp.data);
      dispatch({
        type: 'LOADTRUCKS',
        trucks: resp.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'LOADTRUCKS_FAILED',
        message: 'Failed to load the trucks. Please try again later.',
        error: error
      })
    })
  }
}
