import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';


// TODO: load the tweets and set up an interval
// that loads the tweets again every 2500 ms
// Think about how you'd be able to load tweets
// without doing additional imports...
class TweetList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Loads the tweets
    this.props.loadTweets();
    var time = setInterval(() => {
      this.props.loadTweets();
    }, 2500);
    //Sets the state
    this.setState({'timeout': time});
  }


  // clear the interval (the one running every 2500 ms
  // ie stop  the refreshing)
  componentWillUnmount() {
    this.setState({'timeout': null});
    clearInterval(this.state.timeout)
  }

  // TODO: render out your  tweets (use the Tweet component with
  // appropriate arguments `id` to represent  the tweetId and
  // a key for react
  // ultimate html should look like
  // <div class="col-md-12">
  //  ...bunch o tweets
  // </div>
  render() {
    console.log('ids'  + this.props.ids);
    let tweets = this.props.ids.map((i, tweet) => {
      return <Tweet key={i} tweetId={i}/>
    });
    return (
      <div className ='col-md-12'>
        { tweets }
      </div>
    );
  }
}

const mapStateToProps = state => state.tweetListReducer;


export default connect(
  mapStateToProps,
  null
)(TweetList);
