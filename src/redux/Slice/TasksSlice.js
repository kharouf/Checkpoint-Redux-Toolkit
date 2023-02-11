import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const TasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    
    addTask: (state, action) => {
      state.push(action.payload)
      
    },
    dellTask: (state, action) => {
      return state.filter((el)=> el.id!== action.payload.id)

      
    },
    editTask: (state, action) => {
      return state.map((el=> el.id === action.payload.id ? action.payload : el)
      )

      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask,dellTask,editTask } = TasksSlice.actions

export default TasksSlice.reducer