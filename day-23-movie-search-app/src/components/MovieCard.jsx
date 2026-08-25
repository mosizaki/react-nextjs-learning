function MovieCard({movie, onSelectMovie, onAddToWatchlist, isInWatchlist}) {
    return (
        <article className="movie-card">
            <div className="movie-poster">
                {movie.poster ? (
                    <img src={movie.poster} alt={movie.title}/>
                ) : (
                    <span>{movie.title}</span>
                )}
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>

                <p className="movie-meta">
                    {movie.year} . {movie.type}
                </p>

                <p className="movie-description">
                    {movie.description}
                </p>

                <div className="movie-actions">
                    <button onClick={() => onSelectMovie(movie)}>
                        Details
                    </button>

                    <button className="secondary-button" onClick={() => onAddToWatchlist(movie)} disabled={isInWatchlist}> 
                        {isInWatchlist ? "Saved" : "+ Watchlist"}
                    </button>
                </div>
            </div>
        </article>
    )
}

export default MovieCard