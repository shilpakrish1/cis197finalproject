export const UPDATEPROFILE_FUL = 'UPDATEPROFILE_FUL';
export const UPDATEPROFILE_REJ = 'UPDATEPROFILE_REJ';
export const GETPROFILE_FUL = 'GETPROFILE_FUL';
export const GETPROFILE_REJ = 'GETPROFILE_REJ';
export const FAVUNFAV_FUL = 'FAVUNFAV_FUL';
export const FAVUNFAV_REJ = 'FAVUNFAV_REJ';

export function addFoodTruck(data) {
  return (dispatch) => {
    fetch('/createpost', {method: 'POST', headers: {'Content-Type' : 'application/json'}, body: data})
    .then(res => res.json())
    .then((resp) => {
      const data = resp.data;
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
    fetch('/api/profile')
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response);
      }
    })
    .then((res) => res.json())
    .then((resp) => {
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
