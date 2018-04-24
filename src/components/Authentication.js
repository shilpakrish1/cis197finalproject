import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProfile } from '..'


export default function requiresAuth(Component) {

  class Authentication extends React.Component {

    componentDidMount() {
      this.checkLogin();
    }

    componentDidUpdate() {
      this.checkLogin();
    }

    checkLogin() {
      if (!this.props.isAuthenticated) {
        this.props.rejectLogin();
        this.props.history.push('/signin')
      }
    }

    render() {
      var authenticated = this.props.isAuthenticated;
      if (this.props.isAuthenticated) {
        return (
          <div>
            <Component />
          </div>
        )
      }
      else {
        return (
          null
        )
      }
    }
  }


const mapStateToProps = (state) => state.authReducer;

const mapDispatchToProps = dispatch => ({
  rejectLogin: () => dispatch({type: 'LOGIN_FAILED', message: 'Please login or create an account to see this page.'}),
})


  // withRouter is new. That's just saying that we should give our component the abilities
  // to read from the React Router state via its props (thats how we can change the page, its bc
  // withRouter injects  the prop 'history' which in turn has a function .push('string') that
  // changes the page

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Authentication));
}
