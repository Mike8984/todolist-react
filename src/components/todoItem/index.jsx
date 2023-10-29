import React from 'react'

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
  const classes = []

  if (todo.isCompleted) {
    classes.push('done')
  }

  return (
    <li className="todo-item">
      <div>
        <input
          className="custom-checkbox"
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.isCompleted}
        />
        <h3 className={classes.join(' ')}>{todo.title}</h3>
      </div>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

export default TodoItem
