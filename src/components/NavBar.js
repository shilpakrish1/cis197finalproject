import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// TODO: html  structure will  look like
// <nav class="navbar navbar-expand-sm  navbar-light bg-light">
//  <a class="navbar-brand" href="#">Twitter for BORDS</a>
//  <ul class="navbar-nav">
//    ...navigation items
//  </ul>
// </nav>
// for each of the navigation items, the code is the following
// <li className="nav-item">
//  <Link className="nav-link" to="/feed">
//    Feed
//  </Link>
// </li>
//
// if the user is logged in (how do we check for that given we are
// connected to the isAuthenticated route?)
// render out links for feed, edit profile my profile, and logout
// else
// just render out links for signup/in (coresponging to the /signx route)

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isAuthenticated) {
      return (
        <nav className ='navbar navbar-expand-sm navbar-light bg-light'>
          <a className ='navbar-brand' href='#'>Twitter for Birds</a>
          <ul className ='navbar-nav'>
            <li className= 'nav-item'>
              <Link className='nav-link' to='/feed'>
                Feed
              </Link>
            </li>
            <li className= 'nav-item'>
              <Link className='nav-link' to='/edit-profile'>
                Edit Profile
              </Link>
            </li>
            <li className= 'nav-item'>
              <Link className='nav-link' to='/profile'>
                My Profile
              </Link>
           </li>
           <li className= 'nav-item'>
            <Link className='nav-link' to='/logout'>
              Logout
            </Link>
           </li>
          </ul>
        </nav>
    );
  } else {
    return (
      <nav className ='navbar navbar-expand-sm navbar-light bg-light'>
        <a className ='navbar-brand' href='#'>Twitter for Birds</a>
        <ul className ='navbar-nav'>
          <li className= 'nav-item'>
            <Link className='nav-link' to='/signx'>
              Sign-in
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
 }
}

const mapStateToProps = (state) => {
  let { authReducer } = state;
  return authReducer;
};

export default connect(mapStateToProps, null)(NavBar);
