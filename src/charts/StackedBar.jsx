import React, { useState } from 'react';
import { Progress } from 'reactstrap';

function StackedBar({ title,values }) {
  const [parameters, setParamaters] = useState({
    series: [
      {
        name: 'Striking Calf',
        data: [53, 32, 33],
      },
      {
        name: 'Tank Picture',
        data: [12, 17, 11],
      },
      {
        name: 'Bucket Slope',
        data: [9, 7, 5],
      },
      {
        name: 'Reborn Kid',
        data: [25, 12, 19],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: '100% Stacked Bar',
      },
      xaxis: {
        categories: [2008, 2009, 2010],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });
  return (
    <div>
      <div className='text-start'>{title}</div>
      <Progress multi>
        <Progress bar color='success' value={values[0]} />
        <Progress bar color='warning' value={values[1]} />
        <Progress bar color='danger' value={values[2]} />
      </Progress>
    </div>
  );
}
export default StackedBar;
