//Creates the food truck list reducer
const FoodTruckListReducer = (state = {ids: [],}, action) => {
  switch (action.type) {
  case 'LOADTRUCKS':
    return {
      ids: action.trucks.map(t => t.id),
    };
  default:
    return state;
  }
};

export default FoodTruckListReducer;
