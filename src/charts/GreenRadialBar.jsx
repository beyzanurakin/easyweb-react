import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function GreenRadialBar() {
  const [parameters, setParamaters] = useState({
    series: [75],
    options: {
      labels: ['Çok iyi'],
      fill: {
        colors: ['#0DA000', '#FFFFFF'],
      },

      plotOptions: {
        radialBar: {
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              color: '#0DA000',
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: '25px',
              color: undefined,
              offsetY: -20,
              formatter: function (val) {
                return val + ''
              },
            },
          },
        },
      },
    },
  })
  return (
    <div>
      <Chart
        options={parameters.options}
        series={parameters.series}
        type='radialBar'
      />
    </div>
  )
}

export default GreenRadialBar
