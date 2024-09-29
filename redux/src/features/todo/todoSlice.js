import {createSlice,nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'hello',
      completed: false,
    },
    {
      id: 2,
      text: 'how are you',
      completed: false,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload
      const todo = state.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.text = newText // Update the text of the found todo
      }
    },
    toggleCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed // Toggle completed state
      }
    },
  },
})
 
export const {addTodo,removeTodo,editTodo,toggleCompleted}=todoSlice.actions

export default todoSlice.reducer