import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './App.css'

import { ForecastAdapter } from './adapters'
import { Days } from './components/Days'
import { Graph } from './components/Graph'


export default class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      location: '',
      days: '',
      scale: "F"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ForecastAdapter.all().then(data => {
      const response = data.response[0]
      this.setState({
        location: response.loc,
        days: response.periods
      })
    })
  }

  handleScaleChange = () => {
    if (this.state.scale === "F") {
      this.setState({ scale: "C" })
    } else {
      this.setState({ scale: "F" })
    }
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
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Weather Forecast for - { latlong }</h1>
          </header>
          <h4> Current temperatures are in º{ this.state.scale } <Button icon='exchange' size='mini' onClick={ this.handleScaleChange } /></h4>
        </div>
        <Days days={ this.state.days } scale={ this.state.scale } />
        <Graph days={ this.state.days } scale={ this.state.scale } />
      </div>
    );
  }
}
