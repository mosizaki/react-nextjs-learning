function MovieDetailsModal({movie, onClose, onAddToWatchlist, isInWatchlist}) {
    return (
        <div className="modal-backdrop">
            <div className="movie-modal">
                <button className="modal-close-button" onClick={onClose}>
                    X
                </button>

                <div className="modal-content">
                    <div className="modal-poster">
                        {movie.poster ? (
                            <img src={movie.poster} alt={movie.title}/>
                        ) : (
                            <span>{movie.title}</span>
                        )}
                    </div>

                    <div className="modal-info">
                        <p className="modal-label">Details</p>

                        <h2>{movie.title}</h2>

                        <p className="movie-meta">
                            {movie.year} . {movie.type}
                        </p>

                        <p className="modal-description">
                            {movie.description}
                        </p>

                        <button className="secondary-button" onClick={() => onAddToWatchlist(movie)} disabled={isInWatchlist}>
                            {isInWatchlist ? "Saved" : "+ Watchlist"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsModal