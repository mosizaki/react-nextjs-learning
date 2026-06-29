import NoteCard from "./NoteCard";

function NoteList({
  notes,
  categories,
  onDeleteNote,
  onEditNote
}) {
  function getCategoryName(categoryId) {
    const category = categories.find(
      (category) => category.id === categoryId
    );

    return category ? category.name : "Unknown";
  }

  if (notes.length === 0) {
    return <p>No notes found.</p>;
  }

  return (
    <section className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          categoryName={getCategoryName(note.categoryId)}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
        />
      ))}
    </section>
  );
}

export default NoteList;