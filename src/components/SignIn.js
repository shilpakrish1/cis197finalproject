import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser, registerUser } from '../actions/authentication';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //TODO
  }

  componentDidUpdate() {
    //TODO
  }

  registerUser(e) {
    e.preventDefault();
    let { dispatch } = this.props;
    password = this.refs.passwordregister.value
    username = this.refs.userregister.value
    name = this.refs.name.value
    email = this.refs.email.value
    dispatch(registerUser({username, password, name, email}));
  }

  loginUser(e) {
    e.preventDefault();
    let { dispatch } = this.props;
    dispatch(loginUser({ username: this.refs.username.value, password: this.refs.password.value }));
  }

  render() {
    print('rendering')
    let { isAuthenticated, isFetching, messages } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <p className = 'lead'>
            No account? Create one here:
          </p>
            <form onSubmit={this.registerUser.bind(this)}>
              <div className='form-group-lg'>
                <label>
                  Username:
                </label>
                <input
                  className='form-control'
                  type='text'
                  ref='username-register'
                />
              </div>
              <div className='form-group'>
                <label>
                  Password:
                </label>
                <input
                  className='form-control'
                  type='text'
                  ref='password'
                  />
              </div>
              <div className='form-group'>
                <label>
                  Name:
                </label>
                <input
                  className='form-control'
                  type='text'
                  ref='name'
                />
              </div>
              <div className='form-group'>
                <label>
                  Email:
                </label>
                <input
                  className='form-control'
                  type='text'
                  ref='email'
                />
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='Sign-Up'
                  />
              </div>
            </form>
          </div>
          <div className='col-md-6'>
          <p className ="lead">
            Please login to post:
          </p>
            <form onSubmit={this.loginUser.bind(this)}>
              <div className='form-group'>
                <label>
                  Username:
                </label>
                <input
                  className='form-control'
                  type='text'
                  ref='username'
                />
              </div>
              <div className='form-group'>
                <label>
                  Password:
                </label>
                <input
                  className='form-control'
                  type='password'
                  ref='password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-primary'
                  value='Sign In'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    }
  }

  const mapStateToProps = state => state.authReducer;

export default withRouter(connect(mapStateToProps)(SignIn));
