import React from 'react'
import TodoItem from '../todoItem'

const TodoList = ({todos, removeTodo, addTodo, toggleTodo}) => {
  return (
    <ul className="todo-wrapper">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          addTodo={addTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
