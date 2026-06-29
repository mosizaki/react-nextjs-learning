function NoteCard({
  note,
  categoryName,
  onDeleteNote,
  onEditNote
}) {
  return (
    <article className="note-card">
      <div>
        <h3>{note.title}</h3>
        <span className="category-label">{categoryName}</span>
      </div>

      <p>{note.body}</p>

      <div className="note-actions">
        <button onClick={() => onEditNote(note)}>
          Edit
        </button>

        <button onClick={() => onDeleteNote(note.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteCard;