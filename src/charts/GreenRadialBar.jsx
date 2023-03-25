import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function GreenRadialBar() {
  const [parameters, setParamaters] = useState({
    series: [75],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      colors: ['#228B22'],

      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
        },
      },
      labels: ['Çok iyi'],
    },
  })
  return (
    <div>
      <Chart
        options={parameters.options}
        series={parameters.series}
        type='radialBar'
        height={150}
      />
    </div>
  )
}

export default GreenRadialBar
