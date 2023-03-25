import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function AreaChart() {
  const [parameters, setParamaters] = useState({
    series: [
      {
        name: 'STOCK ABC',
        data: [28, 40, 36, 52, 38, 60, 55],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2.5,
      },
      colors: ['#28C76F'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100],
        },
      },

      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: { show: false },
      },
    },
  })
  return (
    <div>
      <Chart
        options={parameters.options}
        series={parameters.series}
        type='area'
        height={150}
        width={150}
      />
    </div>
  )
}
export default AreaChart
