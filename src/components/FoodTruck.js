import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
var Select = require('react-select');

class FoodTruck extends Component {
  constructor(props) {
    super(props);
    let { dispatch } = this.props
  }

  componentDidMount() {
    setInterval( () => {
       this.setState({
         time : new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true }),
       })
     },1000)
  }

  render() {
    let { foodTruckId, foodTruckName, foodPic, content, menu, openTime, closeTime } = this.props;
    let boxes = menu.map((i, idx) => {
      return (
      <label>
      <input id='checkbox' type='checkbox' />
      {i}
      </label>);
    });
    let updatedCol = 'white'
    if (this.state) {
      if (this.state.time) {
        var currTimeSplit = this.state.time.split(' ');
        var openTimeSplit = openTime.toString().split(' ');
        var closeTimeSplit = closeTime.toString().split(' ');
        var currTime = parseInt(currTimeSplit[0]);
        var openTime1 = parseInt(openTimeSplit[0]);
        var closeTime1 = parseInt(closeTimeSplit[0]);
        if (currTimeSplit[1] == 'PM' & currTimeSplit[0] != 12) {
          currTime += 12
        }
        if (openTimeSplit[1] == 'PM') {
          openTime1 += 12
        }
        if (closeTimeSplit[1] == 'PM') {
          closeTime1 += 12
        }
        if (openTime1 < currTime & currTime < closeTime1) {
          updatedCol = 'lightgreen'
        }
      }
    }
    let cardStyles = {
      marginBottom: '40px',
      padding: '10px',
      backgroundColor : updatedCol,
    };
    let favoriteStyles = {
      color: updatedCol,
    };
    let imgStyles = {
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      marginRight: '10px',
    };
    var options = [];
    let image = foodPic ? foodPic : 'https://cbsphilly.files.wordpress.com/2011/03/magiccarpet.jpg';
    return (
      <div className='card' style={cardStyles}>
        <h5> { foodTruckName } </h5>
        <h5 className='card-title'>
          <img src={image} style={imgStyles} />
        </h5>
        <p>
          { content }
        </p>
        <p>
          <i> Open Time: {openTime} </i>
        </p>
        <p>
          <i> Close Time: {closeTime} </i>
        </p>
        <h6> Order From Menu: </h6>
        {boxes}
        <form>
          <label>
            Write-in order:
            <input type='text' name='name'/>
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

const FoodTruckWithRouter = withRouter(FoodTruck)

const mapStateToProps = (state, ownProps) => {
    return state.FoodTruckReducer[ownProps.id];
}

export default connect(
  mapStateToProps,
)(FoodTruckWithRouter);
