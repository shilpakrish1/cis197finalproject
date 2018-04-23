import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react'
import React, { Component } from 'react';
import { connect } from 'react-redux';


export class GoogleMapContainer extends Component {
    constructor() {
      super();
      this.position = null
    }
    render() {
      console.log('rendering')
      this.props.markers.push({lat: 37.759703, lng: -122.428093, name: 'San Francisco', contentString: 'Fresh malaysian cuisine, cheap'});
      let markers = this.props.markers.map((i, index) => {
        return (<Marker key={index}
                position = {{lat: i.lat, lng: i.lng}}
                onClick = {() =>
                   this.props.click({lat: i.lat, lng: i.lng}, i.name, i.contentString)}
                />)
			 });
      return(
          <Map google={this.props.google}
              style={{width: '100%', height: '40%', position: 'absolute'}}
              className={'map'}
              zoom={10}>
              {markers}
              <InfoWindow position = {this.props.selectedPlace}
                visible = {this.props.showingInfoWindow}>
                <div>
                  <h4> {this.props.selectedName} </h4>
                  <img src = 'http://www.success.com/sites/default/files/styles/article_main/public/main/articles/planhappiness.jpg?itok=KjFY7jd8'
                              width = '150px'/>
                  <i> {this.props.contentString} </i>
                </div>
              </InfoWindow>
            </Map>
        );
    }
}

const mapStateToProps = state => state.markerReducer;

const mapDispatchToProps = (dispatch) => ({
  click : (position, name, contentString) => {
    dispatch({type: 'CLICK', position: position, name : name, contentString: contentString })}
});


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcY9hU1-YzqqXYIkIx-7e-ef_yq4rWOJc'
}) (connect(mapStateToProps, mapDispatchToProps)(GoogleMapContainer))
