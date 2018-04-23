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
               menu: ['Tofu Meatballs', 'Curry Tofu'],
               openTime: '9 AM',
               closeTime: '3 PM',}
      obj[2] = {foodTruckId: 1,
                foodTruckName: 'Magic Carpet',
                foodPic: 'https://cbsphilly.files.wordpress.com/2011/03/magiccarpet.jpg',
                content: 'yum',
                menu: ['Tofu Meatballs', 'Curry Tofu'],
                openTime: '9 AM',
                closeTime: '8 PM'}
      return Object.assign({}, state, obj);
   }
}

export default FoodTruckReducer;
