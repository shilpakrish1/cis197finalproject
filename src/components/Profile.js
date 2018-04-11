import React, { Component } from 'react';
import TweetList from './TweetList';
import ProfileBox from './ProfileBox';
import CreateTweetBox from './CreateTweetBox';
import { loadTweetsForProfile } from '../actions/tweetActions';
import { getUser, favUnfav } from '../actions/profileActions';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.match.params.id) {
     return(
      <div className ='container'>
         <h2> Profile </h2>
         <div className ='row'>
         <div className ='col-md-4'>
          <ProfileBox
               id = {() => this.props.loadProfileTweets(this.props.match.params.id)}
               user = {() => this.props.getUser(this.props.match.params.id)}
               favUnfav = {() => this.props.favUnfav(this.props.match.params.id)}
          />
         </div>
         <div className = 'col-md-8'>
          <CreateTweetBox/>
          <TweetList loadTweets = {() => this.props.loadProfileTweets(this.props.match.params.id)} />
         </div>
         </div>
      </div>
      );
    } else {
        return (
          <div className ='container'>
             <h2> Profile </h2>
             <div className ='row'>
             <div className ='col-md-4'>
              <ProfileBox
                   id = {() => this.props.loadProfileTweets(this.props.match.params.id)}
                   user = {() => this.props.getUser(this.props.match.params.id)}
                   favUnfav = {() => this.props.favUnfav(this.props.match.params.id)}
              />
             </div>
             <div className = 'col-md-8'>
              <TweetList loadTweets = {() => this.props.loadProfileTweets(this.props.match.params.id)} />
             </div>
             </div>
          </div>
        );
    }
  }
}


const mapDispatchToProps = dispatch => ({
  loadProfileTweets: (id) => dispatch(loadTweetsForProfile(id)),
  favUnfav: (id) => dispatch(favUnfav(id)),
  getUser: (id) => dispatch(getUser(id))
});
  // optionally use this to handle assigning dispatch actions to props


export default connect(null, mapDispatchToProps)(Profile);
