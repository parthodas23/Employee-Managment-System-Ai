import React, { Children } from 'react'

const TaskContext = ({Children}) => {
  return (
    <div>
      {Children}
    </div>
  )
}

export default TaskContext
