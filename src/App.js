import React, { Component } from 'react';
import './App.css';

import { ForecastAdapter } from './adapters'
import { Days } from './components/Days'


export default class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      location: '',
      days: ''
    }
  }

  componentWillMount() {
    console.log("mounting");
    // debugger
    ForecastAdapter.all().then(data => {
      const response = data.response[0]
      this.setState({
        location: response.loc,
        days: response.periods
      })
    })
  }

  render() {

    var lat = this.state.location.lat
    var long = this.state.location.long

    if (!!this.state.location) {
      lat = lat > 0 ? `${lat}ºN` : `${Math.abs(lat)}ºS`
      long = long > 0 ? `${long}ºE` : `${Math.abs(long)}ºW`
    }

    const latlong = `Lat: ${ lat } Long: ${ long }`

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather Forecast for - { latlong }</h1>
        </header>
      </div>
    );
  }
}
