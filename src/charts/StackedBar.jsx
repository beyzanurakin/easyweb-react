import React from 'react'
import { Progress } from 'reactstrap'

function StackedBar({ title, values }) {
  return (
    <div>
      <h5 className='text-start'>{title}</h5>
      <Progress multi>
        <Progress bar color='success' value={values[0]} />
        <Progress bar color='warning' value={values[1]} />
        <Progress bar color='danger' value={values[2]} />
      </Progress>
    </div>
  )
}
export default StackedBar
