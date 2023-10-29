import { useState } from 'react'
import todolist from './data'
import Header from './components/header'
import TodoList from './components/todolist'
import TodoForm from './components/todoForm'

const App = () => {
  const [todos, setTodos] = useState(todolist)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    )
  }

  const addTodo = e => {
    if (e.key === 'Enter') {
      setTodos([...todos, { id: Date.now(), title: value, isCompleted: false }])
      setValue('')
      setOpen(false)
    }
  }

  return (
    <>
      <Header heading="todolist" setOpen={setOpen} />
      <section className="todos">
        <div className="container">
          
          {todos.length ? (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              addTodo={addTodo}
              toggleTodo={toggleTodo}
            />
          ) : (
            <h2>No todos</h2>
          )}

          {open && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-header">
                  <button onClick={() => setOpen(false)}>&times;</button>
                </div>
                <TodoForm
                  title={value}
                  setTitle={setValue}
                  createTodo={addTodo}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default App
