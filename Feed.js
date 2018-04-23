import React, { Component } from 'react';
import FoodTruckList from './FoodTruckList';
import { connect } from 'react-redux';
import { loadTrucks } from '../actions/truckActions';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return(
     <div className ='container'>
     <h2> Newsfeed </h2>
     <div className 'row'><div className ='col-6'><GoogleMap/></div><div className ='col-6'><FoodTruckList/></div></div>
     </div>
   );
 }

const mapDispatchToProps = dispatch => ({
//  loadTweets: () => dispatch(loadTrucks()),
});

export default connect(null, mapDispatchToProps)(NewsFeed);
