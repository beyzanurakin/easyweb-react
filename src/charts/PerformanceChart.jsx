import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function PerformanceChart() {
  const [parameters, setParamaters] = useState({
    series: [100],
    options: {
      labels: ['Harika'],
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
      <ReactApexChart
        options={parameters.options}
        series={parameters.series}
        type='radialBar'
      />
    </div>
  )
}

export default PerformanceChart
