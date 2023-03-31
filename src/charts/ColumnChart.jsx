import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function ColumnChart() {
  const [parameters, setParamaters] = useState({
    series: [
      {
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 2.3, 3.1],
      },
    ],
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: 'around',
          borderRadiusWhenStacked: 'all',
          columnWidth: '45%',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
          colors: {
            backgroundBarColors: ['#4B465C14'],
            backgroundBarRadius: 10,
          },
        },
      },
      dataLabels: {
        formatter: function (val) {
          return val + '%'
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#192641',
              colorTo: '#192641',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + '%'
          },
        },
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    },
  })
  return (
    <div>
      <Chart
        options={parameters.options}
        series={parameters.series}
        type='bar'
      />
    </div>
  )
}
export default ColumnChart
