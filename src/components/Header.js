import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/Slice/TasksSlice'

const Header = () => {
    const [newTask, setnewTask] = useState({title:""})
    const dispatch = useDispatch()


  return (
    <div className='header'>
        <input value={newTask.title} type='text' placeholder='To Do Content' onChange={(e)=>setnewTask({...newTask,title:e.target.value})}/>
        <button onClick={()=>{dispatch(addTask({...newTask,isDone:false,id:Math.floor(Math.random()*10)}))
        setnewTask({title:""})
      }}>Add</button>
    </div>
  )
}

export default Header