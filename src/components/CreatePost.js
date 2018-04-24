import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFoodTruck } from '../actions/postActions';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let data = {
      foodTruckName: this.refs.name.value,
      foodPic:  this.refs.image.value,
      content: this.refs.content.value,
      menu: this.refs.menu.value,
      openTime: this.refs.opentime.value,
      closeTime: this.refs.closetime.value
    };
    this.props.addFoodTruck(data);
  }

  render() {
    return (
      <div className="container">
        <h5> Add or Edit Post:</h5>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              ref="name"
            />
          </div>
          <div className="form-group">
            <label>
              Content:
            </label>
            <input
              className="form-control"
              type="text"
              ref="content"
            />
          </div>
          <div className="form-group">
            <label>
              Image:
            </label>
            <input
              className="form-control"
              type="text"
              ref="image"
            />
          </div>
          <div className="form-group">
            <label>
              Menu:
            </label>
            <input
              className="form-control"
              type="text"
              ref="menu"
            />
          </div>
          <div className="form-group">
            <label>
              Open Time
              <i> Please write in following format: 9 AM </i>
            </label>
            <input
              className="form-control"
              type="text"
              ref="closetime"
            />
          </div>
          <div className="form-group">
            <label>
              Close Time:
              <i> Please write in the following format: 5 PM </i>
            </label>
            <input
              className="form-control"
              type="text"
              ref="opentime"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Post"
            />
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  addFoodTruck: (data) => dispatch(addFoodTruck(data))
});


export default connect(null, mapDispatchToProps)(EditProfile);
