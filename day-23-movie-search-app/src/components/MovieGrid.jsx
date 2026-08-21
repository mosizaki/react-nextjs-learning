import MovieCard from './MovieCard'

function MovieGrid({movies}) {
    return (
        <section className='movie-section'>
            <div className="section-header">
                <h2>Movies</h2>
                <p>Showing {movies.length} results</p>
            </div>

            <div className="movie-grid">
                {movies.map((movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })}
            </div>
        </section>
    )
}

export default MovieGrid