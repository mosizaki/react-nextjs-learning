function FilterButtons({categories, currentFilter, onChangeFilter}) {
    return (
        <div className="filter-buttons">
            <h2>Filters</h2>

            {
                categories.map((category) => (
                    <button key={category} className={currentFilter === category ? "active" : ""} onClick={() => onChangeFilter(category)}>
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default FilterButtons