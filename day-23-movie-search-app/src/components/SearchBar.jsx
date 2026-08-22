function SearchBar({searchText, onSearchTextChange, onSearchSubmit}) {
    return (
        <section className="search-section">
            <h2>Search movies</h2>

            <form className="search-form" onSubmit={onSearchSubmit}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(event) => onSearchTextChange(event.target.value)} 
                    placeholder="Search for Batman, Spiderman, Interstellar..."
                />

                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default SearchBar