//Makes the marker reducer
const markerReducer = (state={markers: [], selectedPlace: null,
                              showingInfoWindow: false,
                              selectedName: null}, action) => {

  if (action.type == 'ADD') {
    var obj = state.markers.slice();
    obj.push(action.coords);
    return Object.assign({}, state, obj)
  }
  else if (action.type == 'REMOVE') {
    var obj = state.markers.slice();
    obj.splice(action.idx, 1);
    return Object.assign({}, state, obj)
  }
  else if (action.type == 'CLICK') {
    console.log('here');
    return Object.assign({}, state, {selectedPlace: action.position,
                                    showingInfoWindow: true,
                                    selectedName: action.name,
                                    contentString: action.contentString});
  }
  return state;
}


export default markerReducer;
