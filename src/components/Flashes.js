import React, { Component } from 'react';
import { connect } from 'react-redux';


class Flashes extends Component {
  constructor() {
    super();
  }

  // TODO: ultimate html structure will look like
  // <div>
  //  <div class="alert alert-danger">${message.toString()}. Click to dismiss.</div>
  //  <div class="alert alert-info">${message.toString()}. Click to dismiss.</div>
  //  ...
  // </div>
  render() {
    let messages = this.props.messages.map((i, index) => {
      let name = 'alert alert-' + (i.messageType == 'error' ? 'danger' : 'info');
      return (<div className = {name}
               onClick = {() => this.props.dismiss(index)}
               key = {index}
               index = {index}>
               {i.message + '. '}
                Click to Dismiss.
               </div>);
    });
    return (
      <div>
        {messages}
      </div>
    );
  }
}
  // TODO:  needs  to somehow listen to the state of messageReducer via its props.
  // you could almost say you're mapping the state to props...
  const mapStateToProps = (state) => {
    let { messageReducer } = state;
    return messageReducer;
  }

  const mapDispatchToProps = (dispatch) => ({
    dismiss: (index) => {
      dispatch({
        type: 'DISMISS',
        idx: index,
     });
   },
});


export default connect(mapStateToProps, mapDispatchToProps)(Flashes);
