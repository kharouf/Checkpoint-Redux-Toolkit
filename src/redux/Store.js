import { configureStore } from '@reduxjs/toolkit'
import task from './Slice/TasksSlice'

export const store = configureStore({
  reducer: {task},
})