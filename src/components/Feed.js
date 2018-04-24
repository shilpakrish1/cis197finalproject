import React, { Component } from 'react';
import FoodTruckList from './FoodTruckList.js';
import GoogleMap from './GoogleMap.js'
import { connect } from 'react-redux';
import { loadTrucks } from '../actions/postActions.js';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return(
     <div className ='container'>
     <h4 col = 'bg-light'> Food Trucks </h4>
     <div className ='row'>
      <div className='col-md-6'>
        <FoodTruckList loadTrucks = {this.props.loadTrucks} />
      </div>
      <div className ='col-md-6'>
        <GoogleMap />
      </div>
     </div>
   </div>);
  }
}



const mapDispatchToProps = dispatch => ({
  loadTrucks : () => dispatch(loadTrucks()),
});


export default connect(null, mapDispatchToProps)(NewsFeed);
