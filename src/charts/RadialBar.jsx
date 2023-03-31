import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function RadialBar() {
  const [parameters, setParamaters] = useState({
    series: [80],
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
      colors: ['#51e5a8'],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%',
          },
          track: {
            background: '#ebe9f1',
            strokeWidth: '100%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: '#4B465C',
              fontSize: '22px',
              fontWeight: '600',
            },
          },
        },
      },
      fill: {
        type: 'solid',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: 'green',
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      grid: {
        padding: {
          bottom: 30,
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

export default RadialBar
