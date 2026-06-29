import { useState } from 'react'
import CategoryManager from "./CategoryManager";
import CategoryFilter from "./CategoryFilter";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import EditNoteModal from "./EditNoteModal";
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const [categories, setCategories] = useState([
    { id: "uncategorized", name: "Uncategorized" },
    { id:"study", name: "Study" },
    { id:"work", name:"Work" },
    { id:"ideas", name: "Ideas" }
  ])

  const [activeCategoryId, setActiveCategoryId] = useState("all")

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNoteId, setEditingNoteId] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editBody, setEditBody] = useState("")
  const [editCategoryId, setEditCategoryId] = useState("uncategoriezed")

  function addCategory(categoryName) {
    const trimmedName = categoryName.trim()

    if (trimmedName === "") {
      return
    }

    const categoryExists = categories.some(
      (category) => 
        category.name.toLowerCase() === trimmedName.toLowerCase()
    )

    if (categoryExists) {
      return
    }

    const newCategory = {
      id: Date.now().toString(),
      name: trimmedName
    }

    setCategories([...categories, newCategory])
  }

  function deleteCategory(categoryId) {
    if (categoryId === "uncategorized") {
      return
    }

    setCategories(
      categories.filter((category) => category.id !== categoryId)
    )

    setNotes(
      notes.map((note) => {
        if (note.categoryId === categoryId) {
          return {
            ...note,
            categoryId: "uncategorized"
          }
        }

        return note
      })
    )

    if(activeCategoryId === categoryId) {
      setActiveCategoryId("all")
    }

    if (editCategoryId === categoryId) {
      setEditCategoryId("uncategorized")
    }
  }

  function addNote(noteData) {
    const newNote = {
      id: Date.now().toString(),
      title: noteData.title,
      body: noteData.body,
      categoryId: noteData.categoryId
    }

    setNotes([newNote, ...notes])
  }

  function deleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  function openEditModal(note) {
    setIsModalOpen(true)
    setEditingNoteId(note.id)
    setEditTitle(note.title)
    setEditBody(note.body)
    setEditCategoryId(note.categoryId)
  }

  function closeEditModal() {
    setIsModalOpen(false)
    setEditingNoteId(null)
    setEditTitle("")
    setEditBody("")
    setEditCategoryId("uncategorized")
  }

  function saveEditedNote() {
    if (editTitle.trim() === "") {
      return
    }

    const updatedNotes = notes.map((note) => {
      if (note.id === editingNoteId) {
        return {
          ...note, 
          title: editTitle.trim(),
          body: editBody.trim(),
          categoryId: editCategoryId
        }
      }

      return note
    })

    setNotes(updatedNotes)
    closeEditModal()
  }

  const filteredNotes = 
    activeCategoryId === "all"
      ? notes
      : notes.filter((note) => note.categoryId === activeCategoryId)

  return (
    <div className='app'>
      <h1>Notes app</h1>

      <CategoryManager
        categories={categories}
        onAddCategory={addCategory}
        onDeleteCategory={deleteCategory}
      />

      <NoteForm
        categories={categories}
        onAddNote={addNote}
      />

      <CategoryFilter
        categories={categories}
        activeCategoryId={activeCategoryId}
        onChangeCategory={setActiveCategoryId}
      />

      <p>
        Showing {filteredNotes.length} of {notes.length} notes
      </p>

      <NoteList
        notes={filteredNotes}
        categories={categories}
        onDeleteNote={deleteNote}
        onEditNote={openEditModal}
      />

      {isModalOpen && (
        <EditNoteModal
          categories={categories}
          editTitle={editTitle}
          editBody={editBody}
          editCategoryId={editCategoryId}
          onChangeCategoryId={editCategoryId}
          onChangeEditTitle={setEditTitle}
          onChangeEditBody={setEditBody}
          onChangeEditCategoryId={setEditCategoryId}
          onCloseModal={closeEditModal}
          onSaveNote={saveEditedNote}
        />
      )}
    </div>
  )
}

export default App
