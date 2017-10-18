import React from 'react'
import { Grid } from 'semantic-ui-react'

export const Days = (props) => {

  const { days, scale } = props

  function output(day) {

    if (!!days) {
      const date = days[day].dateTimeISO.match(/(.+)T/)[1]

      const minTempF = days[day].minTempF
      const minTempC = days[day].minTempC
      const maxTempF = days[day].maxTempF
      const maxTempC = days[day].maxTempC

      const minTemp = scale === "F" ? `${ minTempF }ºF` : `${ minTempC }ºC`
      const maxTemp = scale === "F" ? `${ maxTempF }ºF` : `${ maxTempC }ºC`

      const icon = days[day].icon

      return (
        <Grid.Column key={day} >
          <strong>{ date }</strong><br />
          { icon }<br />
          Low: { maxTemp }<br />
          High: { minTemp }<br />
        </Grid.Column>
      )
    }

  }

  return (
      <Grid columns={7} celled textAlign="center" verticalAlign="middle" >
        <Grid.Row>
          { [0, 1, 2, 3, 4, 5, 6].map(x => output(x) ) }
        </Grid.Row>
      </Grid>
  )

}
