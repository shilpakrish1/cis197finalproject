import React, { Component } from 'react';
import { connect } from 'react-redux';

class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return (<div> Your map is loading and will be up shortly. </div>)
    }
    return (<div style = {width: '50vh', '50vh'}>
              <GoogleMap google = {this.props.google} />
           <div/>)
  }
}
