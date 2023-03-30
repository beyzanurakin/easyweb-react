import React, { useState } from 'react'
import Chart from 'react-apexcharts'
function generateDataHeat(count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x,
      y,
    })
    i++
  }
  return series
}

function HeatChart() {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      heatmap: {
        enableShades: false,

        colorScale: {
          ranges: [
            {
              from: 0,
              to: 10,
              name: '0-10',
              color: '#0DA000',
            },
            {
              from: 11,
              to: 20,
              name: '10-20',
              color: '#0DA000',
            },
            {
              from: 21,
              to: 30,
              name: '20-30',
              color: '#0DA000',
            },
            {
              from: 31,
              to: 40,
              name: '30-40',
              color: '#0DA000',
            },
            {
              from: 41,
              to: 50,
              name: '40-50',
              color: '#0DA000',
            },
            {
              from: 51,
              to: 60,
              name: '50-60',
              color: '#A03A00',
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
    },
    grid: {
      padding: {
        top: -20,
      },
    },

    xaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  }

  // ** Chart Series
  const series = [
    {
      name: 'Pzr',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
    {
      name: 'Pzt',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
    {
      name: 'Sal',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
    {
      name: 'Çar',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
    {
      name: 'Per',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
    {
      name: 'Cum',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
    {
      name: 'Cts',
      data: generateDataHeat(24, {
        min: 0,
        max: 60,
      }),
    },
  ]

  return (
    <div>
      <Chart options={options} series={series} type='heatmap' height={350} />
    </div>
  )
}

export default HeatChart
