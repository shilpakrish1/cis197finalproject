//Creates the food truck reducer
const FoodTruckReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOADTRUCKS':
      var obj = {...state};
      action.trucks.map((i) => {
        console.log('truck is' + JSON.stringify(i));
        console.log('i id is' +  i.id);
        console.log('i id1 is' +  i._id);
        obj[i._id] = i;
      });
      console.log('obj is ' + JSON.stringify(obj));
      return Object.assign({}, state, obj);
    case 'CREATETRUCKS':
      return Object.assign({}, state, action.data);
    default:
      var obj = {...state};
      return Object.assign({}, state, obj);
   }
}

export default FoodTruckReducer;
