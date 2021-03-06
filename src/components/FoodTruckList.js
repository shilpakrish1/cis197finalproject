import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodTruck from './FoodTruck.js';
//import loadTrucks from '../actions/postActions.js';

// TODO: load the tweets and set up an interval
// that loads the tweets again every 2500 ms
// Think about how you'd be able to load tweets
// without doing additional imports...
class FoodTruckList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadTrucks();
  //  var time = setInterval(() => {
  //    this.props.loadTrucks();
  //  }, 2500);
  //  this.setState({'timeout': time});
  }

  componentWillUnmount() {
//    this.setState({'timeout': null});
//    clearInterval(this.state.timeout)
  }

  render() {
    console.log(this.props);
    this.props.ids.push(1);
    this.props.ids.push(2);
    let trucks = this.props.ids.map((i, id) => {
      return <FoodTruck key={id} id={i}/>
    });
    return (
      <div>
        { trucks }
      </div>
    );
  }
}

const mapStateToProps = state => state.FoodTruckListReducer;

export default connect(
  mapStateToProps,
)(FoodTruckList);
