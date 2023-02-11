import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dellTask, editTask } from '../redux/Slice/TasksSlice'

const Task = ({ task }) => {
    const dispatch = useDispatch()
    const [onUpdate, setonUpdate] = useState(false)
    const [newTask, setnewTask] = useState(task)

    return (
        <div className= { task.isDone ? 'done' : 'notdone'} >

            {onUpdate ?
                <form className='formulaire'>


                    <input type="text" placeholder='ID' defaultValue={task.id}  />

                    <input type="text" placeholder='TASK' defaultValue={task.title} onChange={(e) => setnewTask({...newTask, title: e.target.value})}/>

                    <input type="text" placeholder='isDone' defaultValue={task.isDone} />

                    <button onClick={() => {{ dispatch(editTask(newTask)); setonUpdate(false) }; dispatch(editTask({...newTask, isDone:!task.isDone}))}} className="btnC"  > Confirm </button>
                    <button onClick={() => setonUpdate(false)} className="btnCan" > Cancel </button>

                </form> : <div className="task-item  " >
                    <h5>{task.title}</h5>
                    <div className="btn">
                        <button className="btnU" onClick={() => setonUpdate(true) } >Update</button>
                        <button className="btnD" onClick={() => dispatch(dellTask(task))}>Delet</button>
                    </div>
                </div>
            }



        </div>
    )
}

export default Task