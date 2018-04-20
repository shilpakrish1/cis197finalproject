import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <nav className ='navbar navbar-light navbar-expand-sm bg-light'>
          <a className ='navbar-brand' href='#'>Food Truck Finder</a>
          <ul className ='navbar-nav'>
            <li className= 'nav-item'>
              <Link className='nav-link' to='/home'>
                Home
              </Link>
            </li>
            <li className= 'nav-item'>
              <Link className='nav-link' to='/signin'>
                Login
              </Link>
            </li>
            <li className= 'nav-item'>
              <Link className='nav-link' to='/createpost'>
                Add Food Truck
              </Link>
           </li>
           <li className= 'nav-item'>
             <Link className='nav-link' to='/logout'>
               Logout
             </Link>
          </li>
          </ul>
        </nav>
    )}
}


const mapStateToProps = state => state.authReducer;



export default connect(mapStateToProps, null)(NavBar);
