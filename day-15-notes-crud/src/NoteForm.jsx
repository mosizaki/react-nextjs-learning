import { useState } from "react";

function NoteForm({ categories, onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categoryId, setCategoryId] = useState("uncategorized");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const noteData = {
      title: title.trim(),
      body: body.trim(),
      categoryId: categoryId
    };

    onAddNote(noteData);

    setTitle("");
    setBody("");
    setCategoryId("uncategorized");
  }

  return (
    <section className="section">
      <h2>Add Note</h2>

      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Note title"
        />

        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Write your note..."
        />

        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit">Add Note</button>
      </form>
    </section>
  );
}

export default NoteForm;