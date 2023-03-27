import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function LifeLineChart() {
  const [parameters, setParamaters] = useState({
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#0DA000'],
      stroke: {
        curve: 'smooth',
      },

      xaxis: {
        categories: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
        ],
      },
    },
    series: [
      {
        name: 'Desktops',
        data: [
          90, 10, 90, 10, 90, 62, 69, 91, 148, 10, 41, 35, 51, 49, 62, 69, 91,
          110, 49, 62, 69, 91, 110,
        ],
      },
    ],
  })
  return (
    <div>
      <ReactApexChart
        options={parameters.options}
        series={parameters.series}
        type='line'
        height={60}
      />
    </div>
  )
}

export default LifeLineChart
