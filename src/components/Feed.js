import React, { Component } from 'react';
import FoodTruckList from './FoodTruckList.js';
import GoogleMap from './GoogleMap.js'
import { connect } from 'react-redux';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return(
     <div className ='container'>
     <h2> Newsfeed </h2>
     <div className ='row'>
      <div className='col-md-6'>
        <FoodTruckList />
      </div>
      <div className ='col-md-6'>
        <GoogleMap />
      </div>
     </div>
   </div>);
  }
}



const mapDispatchToProps = dispatch => ({

  });


export default connect(null, mapDispatchToProps)(NewsFeed);
