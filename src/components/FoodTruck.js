import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FoodTruck extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }



  render() {
    console.log('my props are ' + JSON.stringify(this.props));
    let { foodTruckId, foodTruckName, foodPic, content, timesOpen } = this.props;
    let cardStyles = {
      marginBottom: '40px',
      padding: '10px',
    };
    let favoriteStyles = {
      color: 'BDFF00',
    };
    let imgStyles = {
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      marginRight: '10px',
    };
    let image = foodPic ? foodPic : 'https://cbsphilly.files.wordpress.com/2011/03/magiccarpet.jpg';
    return (
      <div className='card' style={cardStyles}>
        <h2> { foodTruckName } </h2>
        <h5 className='card-title'>
          <img src={image} style={imgStyles} />
        </h5>
        <p>
          { content }
        </p>
        <p>
          { timesOpen }
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return state.FoodTruckReducer[ownProps.id];
  }

export default connect(
  mapStateToProps,
)(FoodTruck);
