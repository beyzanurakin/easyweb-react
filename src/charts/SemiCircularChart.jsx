import React from 'react'
import ReactApexChart from 'react-apexcharts'

function SemiCircularChart({ serie, color }) {
  const series = [serie]
  const options = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      colors: [color],
      opacity: 0.9,
      type: 'solid',
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Average Results'],
  }
  return (
    <div>
      <ReactApexChart options={options} series={series} type='radialBar' />
    </div>
  )
}

export default SemiCircularChart
