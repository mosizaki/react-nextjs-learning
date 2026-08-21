function Header () {
    return (
        <header className="header">
            <div>
                <h1>Movie Search</h1>
                <p>Find movies and build your personal watchlist.</p>
            </div>

            <div className="header-watchlist-count">
                Watchlist: <strong>0</strong>
            </div>
        </header>
    )
}

export default Header