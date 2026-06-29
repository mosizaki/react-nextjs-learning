function EditNoteModal({
  categories,
  editTitle,
  editBody,
  editCategoryId,
  onChangeEditTitle,
  onChangeEditBody,
  onChangeEditCategoryId,
  onCloseModal,
  onSaveNote
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Note</h2>

        <input
          type="text"
          value={editTitle}
          onChange={(event) =>
            onChangeEditTitle(event.target.value)
          }
          placeholder="Note title"
        />

        <textarea
          value={editBody}
          onChange={(event) =>
            onChangeEditBody(event.target.value)
          }
          placeholder="Write your note..."
        />

        <select
          value={editCategoryId}
          onChange={(event) =>
            onChangeEditCategoryId(event.target.value)
          }
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div className="modal-actions">
          <button onClick={onCloseModal}>Cancel</button>
          <button onClick={onSaveNote}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditNoteModal;