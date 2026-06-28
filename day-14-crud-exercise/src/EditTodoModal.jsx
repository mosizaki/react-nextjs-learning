function EditTodoModal({
    editText,
    editCategory,
    onChangeEditText,
    onChangeEditCategory,
    onCloseModal,
    onSaveEdit
}) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Edit Todo</h2>

                <input type="text" value={editText} onChange={(event) => onChangeEditText(event.target.value)} />

                <select value={editCategory} onChange={(event) => onChangeEditCategory(event.target.value)}>
                    <option value="study">study</option>
                    <option value="work">work</option>
                    <option value="personal">personal</option>
                </select>

                <div className="modal-actions">
                    <button onClick={onCloseModal}>Cancel</button>
                    <button onClick={onSaveEdit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditTodoModal