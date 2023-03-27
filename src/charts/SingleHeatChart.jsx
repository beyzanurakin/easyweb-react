import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function SingleHeatChart() {
  const [parameters, setParamaters] = useState({
    options: {
      chart: {
        type: 'heatmap',
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#0DA000'],
    },
    series: [
      {
        name: 'Series 1',
        data: [
          {
            x: 'W1',
            y: 22,
          },
          {
            x: 'W2',
            y: 29,
          },
          {
            x: 'W3',
            y: 13,
          },
          {
            x: 'W4',
            y: 32,
          },
          {
            x: 'W5',
            y: 22,
          },
          {
            x: 'W6',
            y: 29,
          },
          {
            x: 'W7',
            y: 13,
          },
          {
            x: 'W8',
            y: 32,
          },
          {
            x: 'W9',
            y: 22,
          },
          {
            x: 'W10',
            y: 29,
          },
          {
            x: 'W11',
            y: 13,
          },
          {
            x: 'W12',
            y: 32,
          },
          {
            x: 'W13',
            y: 22,
          },
          {
            x: 'W14',
            y: 29,
          },
          {
            x: 'W15',
            y: 13,
          },
          {
            x: 'W16',
            y: 32,
          },
          {
            x: 'W17',
            y: 22,
          },
          {
            x: 'W18',
            y: 29,
          },
          {
            x: 'W19',
            y: 13,
          },
          {
            x: 'W20',
            y: 32,
          },
          {
            x: 'W21',
            y: 22,
          },
          {
            x: 'W22',
            y: 29,
          },
          {
            x: 'W23',
            y: 13,
          },
          {
            x: 'W24 ',
            y: 32,
          },
        ],
      },
    ],
  })
  return (
    <div>
      <ReactApexChart
        options={parameters.options}
        series={parameters.series}
        type='heatmap'
        height={60}
      />
    </div>
  )
}

export default SingleHeatChart
