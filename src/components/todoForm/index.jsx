import React from 'react'

const TodoForm = ({ title, setTitle, createTodo }) => {
  return (
    <div className="add-todo">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyUp={createTodo}
        type="text"
        placeholder="Enter the task"
      />
    </div>
  )
}

export default TodoForm
