import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function BarChart() {
  const [parameters, setParamaters] = useState({
    series: [
      {
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25],
      },
    ],
    options: {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      states: {
        hover: {
          filter: 'none',
        },
      },
      colors: ['#C70039'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          borderRadius: 8,
          borderRadiusApplication: 'end',
          
        },
      },
      tooltip: {
        x: { show: false },
      },
      xaxis: {
        type: 'numeric',
      },
    },
  });
  return (
    <div className='py-3'>
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

export default BarChart;
