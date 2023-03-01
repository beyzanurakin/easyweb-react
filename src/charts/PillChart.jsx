import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function PillChart() {
  const [parameters, setParamaters] = useState({
    series: [
      {
        name: 'Huawei',
        data: [70, 110, 50, 190, 75, 110, 175, 70, 88, 180],
      },
      {
        name: 'Apple',
        data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180],
      },
      {
        name: 'Samsung',
        data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20],
      },
    ],
    options: {
      chart: {

        sparkline:{
          enabled:true,
        },
        height: 400,
        type: 'bar',
        stacked: true,
        parentHeightOffset: 0,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
            ],
            backgroundBarRadius: 10,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'start',
      },
      colors: ['#53894E', '#FBB347', '#447DD1', '#A03A00', '#FFFFFF'],
      stroke: {
        show: true,
        colors: ['transparent'],
      },
      grid: {
        xaxis: {
          labels: {
            show: false,
          },
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
        ],
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        opposite: 'rtl',
      },
    },
  });
  return (
    <div>
      <Chart
        options={parameters.options}
        series={parameters.series}
        type='bar'
        height={150}
        width={300}
      />
    </div>
  );
}
export default PillChart;
