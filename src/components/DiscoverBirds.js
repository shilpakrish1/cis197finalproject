import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class DiscoverBirds extends Component {
  constructor() {
    super();
  }

  // TODO: once the component mounts, call the the function
  // that allows you to discover birds (hint refer to the
  // properties of the component
  componentDidMount() {
    this.props.getDiscoverBirds();
  }

  render() {
    console.log('props are ' + JSON.stringify(this.props));
    let users = [];
    this.props.discovers.map((i, idx) => {
      let authorUrl = `/profile/${i.id}`;
      users.push(
        <div key={idx}>
          <a href={authorUrl}>
            { i.name }
          </a>
        </div>
      );
    });

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Discover Birds</h3>
          { users }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => state.discoverReducer;



export default connect(mapStateToProps, null)(DiscoverBirds);
