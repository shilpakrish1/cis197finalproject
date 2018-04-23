//Creates the food truck reducer
const FoodTruckReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOADTRUCKS':
      var obj = {...state};
      action.trucks.map((i) => {
        obj[i.id] = i;
      });
      return Object.assign({}, state, obj);
    case 'CREATETRUCKS':
      return Object.assign({}, state, action.data);
    default:
      var obj = {...state};
      obj[1] = {foodTruckId: 1,
               foodTruckName: 'Magic Carpet',
               foodPic: 'https://cbsphilly.files.wordpress.com/2011/03/magiccarpet.jpg',
               content: 'yum',
               timesOpen: '9-12'}
      obj[2] = {foodTruckId: 1,
                foodTruckName: 'Magic Carpet',
                foodPic: 'https://cbsphilly.files.wordpress.com/2011/03/magiccarpet.jpg',
                content: 'yum',
                timesOpen: '9-12'}
      return Object.assign({}, state, obj);
   }
}

export default FoodTruckReducer;
