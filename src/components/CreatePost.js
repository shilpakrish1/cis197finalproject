import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
//    this.props.updateProfile(data);
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
              Open Time:
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
  updateProfile: (data) => dispatch(updateProfile(data))
});

  // set up a call to the updateProfile async action creator
  // ie just do the regular mapDispatchToProps type of
  // pattern for dispatching updateProfile

export default connect(null, mapDispatchToProps)(EditProfile);
