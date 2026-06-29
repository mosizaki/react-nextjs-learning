import { useState } from "react";

function CategoryManager({
  categories,
  onAddCategory,
  onDeleteCategory
}) {
  const [categoryName, setCategoryName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (categoryName.trim() === "") {
      return;
    }

    onAddCategory(categoryName);
    setCategoryName("");
  }

  return (
    <section className="section">
      <h2>Manage Categories</h2>

      <form className="category-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          placeholder="Add new category"
        />

        <button type="submit">Add Category</button>
      </form>

      <div className="category-list">
        {categories.map((category) => (
          <div className="category-pill" key={category.id}>
            <span>{category.name}</span>

            {category.id !== "uncategorized" && (
              <button onClick={() => onDeleteCategory(category.id)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryManager;