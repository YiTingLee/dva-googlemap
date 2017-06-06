import React, { Component } from 'react';
import { connect } from 'dva';

class SelectBar extends Component {
  constructor(props) {
    super(props);
    // console.log("this:",this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event) {
    // console.log(event.target.value);
    // this.props.fetchTaxiLocation(event.target.value);
    this.props.dispatch({
      type: 'main/fetchTaxiLocation',
      payload: event.target.value,
    });


    var lat,lng,olat, olng;
    switch (event.target.value) {
      case "ntut":
        olat = 25.042171;
        olng = 121.535507;
        break;
      case "station":
        olat = 25.048080;
        olng = 121.517054;
        break;
      case "taipei101":
        olat = 25.034234;
        olng = 121.564510;
        break;
      default:

    }

    lat=this.props.lat;
    lng=this.props.lng;

    this.props.dispatch({
      type: 'main/fetchDirecions',
      payload: {lat,lng,olat,olng},
    });

    // this.props.fetchDirecions(this.props.lat,this.props.lng,olat,olng);

  }

  render() {
    return (
      <select onChange={this.onSelectChange} >
        <option value="ntut">NTUT</option>
        <option value="station">台北車站</option>
        <option value="taipei101">台北101</option>
      </select>
    )
  }
}

export default connect(null)(SelectBar);
