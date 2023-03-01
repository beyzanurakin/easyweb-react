import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function PieChart() {
  const [paramaters, setParamaters] = useState({
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: { show: false },
      labels: ['App', 'Service', 'Product'],
      plotOptions: {
        pie: {
          startAngle: -10,
          donut: {
            labels: {
              show: true,
              name: {
                offsetY: 15,
              },
              value: {
                offsetY: -15,
                formatter(val) {
                  return `${parseInt(val)} %`;
                },
              },
              total: {
                show: true,
                offsetY: 15,
                label: 'App',
                formatter() {
                  return '53%';
                },
              },
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <Chart
        options={paramaters.options}
        series={paramaters.series}
        type='donut'
        height={150}
        width={300}
      />
    </div>
  );
}

export default PieChart;
