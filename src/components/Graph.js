import React from 'react'
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    const { days, scale } = props

    var labels = []
    var min = []
    var avg = []
    var max = []

    if (!!days) {
      for (let x = 0; x < 7; x++) {
        labels.push(days[x].dateTimeISO.match(/(.+)T/)[1])
        if (scale === "F") {
          min.push(days[x].minTempF)
          avg.push(days[x].avgTempF)
          max.push(days[x].maxTempF)
        } else {
          min.push(days[x].minTempC)
          avg.push(days[x].avgTempC)
          max.push(days[x].maxTempC)
        }
      }
    }

    const data_temps = {
      labels: labels,
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20
          }
        },
        scales: {
          xAxes: [{
            barThickness: 0.1
          }]
        }
      },
      datasets: [
        {
          label: `High Temps (º${scale})`,
          type: 'line',
          fill: "+1",
          lineTension: 0.1,
          backgroundColor: 'rgba(255,0,77,0.4)',
          borderColor: 'rgba(255,0,77,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,0,77,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,0,77,1)',
          pointHoverBorderColor: 'rgba(255,0,77,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: max
        },
        {
          label: `Average Temps (º${scale})`,
          type: 'line',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 116, 0,0.4)',
          borderColor: 'rgba(255, 116, 0,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255, 116, 0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 116, 0,1)',
          pointHoverBorderColor: 'rgba(255, 116, 0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: avg
        },
        {
          label: `Low Temps (º${scale})`,
          type: 'line',
          fill: '-1',
          lineTension: 0.1,
          backgroundColor: 'rgba(169, 13, 255,0.4)',
          borderColor: 'rgba(169, 13, 255,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(169, 13, 255,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(169, 13, 255,1)',
          pointHoverBorderColor: 'rgba(169, 13, 255,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: min
        }
      ]
    };

        return (
      <div>
        <Bar data={data_temps} height={60}/>
      </div>
    );

}
