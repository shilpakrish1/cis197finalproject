// TODO: Determine appropriate imports
import React, { Component } from 'react';
import {Route, Switch,} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import Logout from './Logout';
import Navigation from './Navigation'
import Alerts from './Alerts'
import GoogleMap from './GoogleMap.js'
import NewsFeed from './Feed.js'
import CreatePost from './CreatePost.js'
import Authentication from './Authentication.js'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className = 'container-fluid'>
          <div>
            <Navigation/>
            <Alerts/>
            <Switch>
              <Route path ='/signin' component={SignIn}/>
              <Route path ='/logout' component={Logout}/>
              <Route path = '/createpost/:id?' component = {Authentication(CreatePost)} />
              <Route path ='/home' component={NewsFeed}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
 }
}


export default App;
