import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alerts extends Component {
  constructor() {
    super();
  }

  render() {
//    console.log('alerts props are' + JSON.stringify(this.props));
    let alerts = this.props.alerts.map((i, index) => {
      let name = 'alert alert-' + (i.alertType == 'error' ? 'warning' : 'info');
      var message = ''
      if (i.message) {
        message = i.message;
      }
      else {
        message = i.error;
      }
      return (<div className = {name}
                   onClick = {() => this.props.dismiss(index)}
                   key = {index} index = {index} >
                   {message + ' '}
              </div>);
    });
    return (
      <div>
        {alerts}
      </div>
    );
  }
}

const mapStateToProps = state => state.alertsReducer;

const mapDispatchToProps = (dispatch) => ({
  dismiss: (index) => {
    dispatch({type: 'DISMISS', index: index});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
