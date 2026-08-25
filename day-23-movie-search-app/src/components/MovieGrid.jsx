import MovieCard from './MovieCard'

function MovieGrid({movies, loading, error, submittedSearch, onSelectMovie, onAddToWatchlist, watchlist}) {
    return (
        <section className='movie-section'>
            <div className="section-header">
                <h2>
                    {submittedSearch ? `Results for "${submittedSearch}"` : "Movies"}
                </h2>
                <p>
                    {loading ? "Searching..." : `Showing ${movies.length} results`}
                </p>
            </div>

            {loading && (
                <div className="status-message">
                    <h3>Searching movies...</h3>
                    <p>Please wait while we fetch movie results.</p>
                </div>
            )}

            {!loading && error && (
                <div className="status-message error-message">
                    <h3>Something went wrong</h3>
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && movies.length === 0 && (
                <div className="status-message">
                    <h3>No movies found</h3>
                    <p>Try searching for another movie title.</p>
                </div>
            )}

            {!loading && !error && movies.length > 0 && (
                <div className="movie-grid">
                    {movies.map((movie) => {
                        const isInWatchlist = watchlist.some((watchlistMovie) => {
                            return watchlistMovie.id === movie.id
                        })
                        return (
                            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} onAddToWatchlist={onAddToWatchlist} isInWatchlist={isInWatchlist}/>
                        )
                    })}
                </div>
            )}

            
        </section>
    )
}

export default MovieGrid