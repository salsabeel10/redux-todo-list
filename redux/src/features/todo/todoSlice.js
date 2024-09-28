import {createSlice,nanoid} from '@reduxjs/toolkit'


const initialState = {
  todos: [
    {
      id: 1,
      text: 'hello',
    },
    {
      id: 2,
      text: 'how are you',
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
  },
})
 
export const {addTodo,removeTodo,editTodo}=todoSlice.actions

export default todoSlice.reducer