import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import FilterButtons from './FilterButtons'
import EditTodoModal from './EditTodoModal'


import './App.css'

const categories = ["all", "study", "work", "personal"]

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTodoId, setEditingTodoId] = useState(null)
  const [editText, setEditText] = useState("")
  const [editCategory, setEditCategory] = useState("study")

  function addTodo(text, category) {
    const newTodo = {
      id: Date.now(),
      text: text,
      category: category
    }

    setTodos([...todos, newTodo])
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function openEditModal(todo) {
    setIsModalOpen(true)
    setEditingTodoId(todo.id)
    setEditText(todo.text)
    setEditCategory(todo.category)
  }

  function closeEditModal() {
    setIsModalOpen(false)
    setEditingTodoId(null)
    setEditText("")
    setEditCategory("study")
  }

  function saveEditedTodo() {
    if (editText.trim() === "") {
      return
    }

    const updatedTodos = todos.map((todo) => {
      if (todo.id === editingTodoId) {
        return {
          ...todo, 
          text: editText.trim(),
          category: editCategory
        }
      }

      return todo
    })

    setTodos(updatedTodos)
    closeEditModal()
  }

  const filteredTodos = 
    filter === "all"
    ? todos
    : todos.filter((todo) => todo.category === filter)

  return (
    <div className='app'>
      <h1>React CRUD Todo App</h1>

      <TodoForm onAddTodo={addTodo}/>

      <FilterButtons categories={categories} currentFilter={filter} onChangeFilter={setFilter}/>

      <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onEditTodo={openEditModal}/>

      {
        isModalOpen && (
          <EditTodoModal 
            editText={editText}
            editCategory={editCategory}
            onChangeEditText={setEditText}
            onChangeEditCategory={setEditCategory}
            onCloseModal={closeEditModal}
            onSaveEdit={saveEditedTodo}
          />
        )
      }
    </div>
  )
}

export default App
