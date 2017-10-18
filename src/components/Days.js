import React from 'react'
import { Grid } from 'semantic-ui-react'

export const Days = (props) => {

  const { days, scale } = props

  function output(day) {

    if (!!days) {
      const date = days[day].dateTimeISO.match(/(.+)T/)[1]

      const minTempF = days[day].minTempF
      const minTempC = days[day].minTempC
      const avgTempF = days[day].avgTempF
      const avgTempC = days[day].avgTempC
      const maxTempF = days[day].maxTempF
      const maxTempC = days[day].maxTempC

      const minTemp = scale === "F" ? `${ minTempF }ºF` : `${ minTempC }ºC`
      const avgTemp = scale === "F" ? `${ avgTempF }ºF` : `${ avgTempC }ºC`
      const maxTemp = scale === "F" ? `${ maxTempF }ºF` : `${ maxTempC }ºC`

      const icon = require(`../icons/${days[day].icon}`)

      return (
        <Grid.Column key={day} >
          <strong>{ date }</strong><br /><br />
          <img className='image' alt={ `${days[day].icon}`.match(/(.+)\./)[1] } src={ icon } /><br /><br />
          Low: { maxTemp }<br />
          Avg: { avgTemp }<br />
          High: { minTemp }<br />
        </Grid.Column>
      )
    }

  }

  return (
    <Grid celled columns={7} textAlign="center" verticalAlign="middle">
      <Grid.Row>
          { [0, 1, 2, 3, 4, 5, 6].map(x => output(x) ) }
      </Grid.Row>
    </Grid>
  )

}
