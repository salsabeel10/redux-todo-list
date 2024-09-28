import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/todoSlice'

const List = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const [editId, setEditId] = useState(null) // Track which todo is being edited
  const [newText, setNewText] = useState('') // Store the new text for the todo

  const handleEditClick = (todo) => {
    setEditId(todo.id) // Set the current todo to edit mode
    setNewText(todo.text) // Set the input value to the current todo text
  }

  const handleSaveClick = (id) => {
    dispatch(editTodo({ id, newText })) // Dispatch edit action with new text
    setEditId(null) // Exit edit mode
  }

  return (
    <div>
      <ul className="divide-y divide-gray-200 px-4">
        {todos.map((todo) => (
          <li className="py-4" key={todo.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id={todo.id}
                  name="todo1"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
                />
                {editId === todo.id ? (
                  // If this todo is being edited, show the input field
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="ml-3 text-lg font-medium rounded outline-none w-48"
                  />
                ) : (
                  // Otherwise, show the todo text
                  <label className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">{todo.text}</span>
                  </label>
                )}
              </div>
              <div className="flex space-x-1">
                {editId === todo.id ? (
                  <button
                    onClick={() => handleSaveClick(todo.id)}
                    className="mr-1 text-blue-600 text-lg cursor-pointer hover:text-blue-700"
                  >
                    Save
                  </button>
                ) : (
                  <span
                    onClick={() => handleEditClick(todo)}
                    className="text-gray-500 text-2xl cursor-pointer hover:text-blue-600"
                  >
                    <MdEdit />
                  </span>
                )}
                <span
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-gray-500 text-2xl cursor-pointer hover:text-red-600"
                >
                  <MdDeleteForever />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
