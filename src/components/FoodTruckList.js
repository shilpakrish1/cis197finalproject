import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodTruck from './FoodTruck.js';

// TODO: load the tweets and set up an interval
// that loads the tweets again every 2500 ms
// Think about how you'd be able to load tweets
// without doing additional imports...
class FoodTruckList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Loads the tweets
    //this.props.loadTrucks();
  //  var time = setInterval(() => {
    //  this.props.loadTrucks();
  //  }, 2500);
    //Sets the state
  //  this.setState({'timeout': time});
  }


  // clear the interval (the one running every 2500 ms
  // ie stop  the refreshing)
  componentWillUnmount() {
    this.setState({'timeout': null});
    clearInterval(this.state.timeout)
  }

  // TODO: render out your  tweets (use the Tweet component with
  // appropriate arguments `id` to represent  the tweetId and
  // a key for react
  // ultimate html should look like
  // <div class="col-md-12">
  //  ...bunch o tweets


  // </div>
  render() {
    console.log(this.props);
    this.props.ids.push(1);
    this.props.ids.push(2);
    let trucks = this.props.ids.map((i, truck) => {
      return <FoodTruck key={i} id={i}/>
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
  null
)(FoodTruckList);
