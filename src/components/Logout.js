import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logOut } from '../actions/authActions';

class Logout extends React.Component {
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(logOut());
    this.props.history.push('/signin');
  }

  render() {
    return (
      <div>
        You are logging out and will no longer be able to make posts.
      </div>
    );
  }
}

export default connect()(Logout);
