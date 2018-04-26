//Makes the marker reducer
const markerReducer = (state={markers: [], selectedPlace: null,
                              showingInfoWindow: false,
                              selectedName: null}, action) => {
  console.log('marker action' + action.type);
  if (action.type == 'LOADTRUCKS') {
    var obj = state.markers.slice();
    console.log('marker trucks are' + action.trucks);
    action.trucks.map((i) => {
      var latitude = i.latitude;
      var longitude = i.longitude;
      var name = i.foodTruckName;
      var image = i.foodPic;
      var content = i.content;
      obj.push({'latitude': latitude, 'longitude': longitude, 'name': name, 'contentString': content});
    });
    return Object.assign({}, state, {markers: obj})
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
