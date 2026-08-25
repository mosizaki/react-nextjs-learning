function WatchListPanel({watchlist, onRemoveFromWatchlist}) {
    return (
        <section className="watchlist-panel">
            <h2>Your Watchlist</h2>

            {watchlist.length === 0 && (
                <p className="watchlist-empty">
                    No movies saved yet.
                </p>
            )}

            {watchlist.length > 0 && (
                <div className="watchlist-preview">
                    {watchlist.map((movie) => {
                        return (
                            <article className="watchlist-item" key={movie.id}>
                                <div className="watchlist-poster">
                                    {movie.poster && (
                                        <img src={movie.poster} alt={movie.title} />
                                    )}
                                </div>

                                <div className="watchlist-item-info">
                                    <h3>{movie.title}</h3>
                                    <p>{movie.year}</p>

                                    <button className="watchlist-remove-button" onClick={() => onRemoveFromWatchlist(movie.id)}>
                                        Remove
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}

export default WatchListPanel