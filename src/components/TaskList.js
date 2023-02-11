import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const TaskList = () => {
    const tasks = useSelector((store)=>store.task)

  return (
    <div className='tasklist'>
        
        {tasks.map((taskm,i) => <Task key={i} task={taskm}/>)}
    </div>
  )
}

export default TaskList