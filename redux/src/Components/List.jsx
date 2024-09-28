import React from 'react'
import { useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { FaPen } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


const List = () => {
  const dispatch=useDispatch()
  const todos = useSelector((state) => state.todos)
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
                <label className="ml-3 block text-gray-900">
                  <span className="text-lg font-medium">{todo.text}</span>
                </label>
              </div>
              <span 
              onClick={()=>dispatch(removeTodo(todo.id))}
              className="text-gray-500 text-2xl cursor-pointer hover:text-red-600">
                <MdDeleteForever />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
