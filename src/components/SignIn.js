import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser, loggedIn, registerUser } from '../actions/authActions';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.loggedIn();
      this.props.history.push('/home');
    }
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.loggedIn();
      this.props.history.push('/home');
    }
  }

  registerUser(e) {
    e.preventDefault();
    let { dispatch } = this.props;
    var password = this.refs.passwordregister.value
    var username = this.refs.usernameregister.value
    var name = this.refs.name.value
    var email = this.refs.email.value
    this.props.registerUser({username, password, name, email});
  }

  loginUser(e) {
    e.preventDefault();
    let { dispatch } = this.props;
    this.props.loginUser({username: this.refs.username.value, password: this.refs.password.value});
  }

  render() {
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
                  ref='usernameregister'
                />
              </div>
              <div className='form-group'>
                <label>
                  Password:
                </label>
                <input
                  className='form-control'
                  type='password'
                  ref='passwordregister'
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
            Login to be able to post:
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

const mapDispatchToProps = dispatch => ({
  loggedIn: () => dispatch(loggedIn()),
  registerUser: (item) => dispatch(registerUser(item)),
  loginUser: (item) => dispatch(loginUser(item))
})


const mapStateToProps = state => state.authReducer;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
