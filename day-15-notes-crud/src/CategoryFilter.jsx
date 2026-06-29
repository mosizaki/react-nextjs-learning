function CategoryFilter({
  categories,
  activeCategoryId,
  onChangeCategory
}) {
  return (
    <section className="section">
      <h2>Filter Notes</h2>

      <div className="filter-buttons">
        <button
          className={activeCategoryId === "all" ? "active" : ""}
          onClick={() => onChangeCategory("all")}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={
              activeCategoryId === category.id ? "active" : ""
            }
            onClick={() => onChangeCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;