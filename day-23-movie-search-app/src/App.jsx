import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MovieGrid from './components/MovieGrid'
import WatchListPanel from './components/WatchListPanel'
import MovieDetailsModal from './components/MovieDetailsModal'

const fakeMovies = [
  {
    id: "1",
    title: "Interstellar",
    year: "2014",
    type: "movie",
    poster: "",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: "2008",
    type: "movie",
    poster: "",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos.",
  },
  {
    id: "3",
    title: "Inception",
    year: "2010",
    type: "movie",
    poster: "",
    description:
      "A skilled thief enters people's dreams to steal secrets and is offered a chance to erase his past.",
  },
];

function formatMovieFromApi(apiItem) {
  const show = apiItem.show;

  return {
    id: String(show.id),
    title: show.name || "Untitled",
    year: show.premiered ? show.premiered.slice(0, 4) : "Unknown",
    type: show.genres?.length > 0 ? show.genres.join(", ") : "TV Show",
    poster: show.image?.medium || "",
    description: show.summary
      ? show.summary.replace(/<[^>]*>/g, "")
      : "No description available.",
  };
}

function App() {

  const [movies, setMovies] = useState(fakeMovies)
  const [searchText, setSearchText] = useState("")
  const [submittedSearch, setSubmittedSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [watchlist, setWatchlist] = useState([])


  async function handleSearchSubmit(event) {
    event.preventDefault()

    const searchTerm = searchText.trim()

    if (searchTerm === "") {
      return
    }

    try {
      setLoading(true)
      setError("")
      setMovies([])
      setSubmittedSearch(searchTerm)

      const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
        searchTerm
      )}`;

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error("Failed to fetch movies.")
      }

      const data = await response.json()

      console.log(data)

      const formattedMovies = data.map((apiItem) => {
        return formatMovieFromApi(apiItem);
      });

      setMovies(formattedMovies)
    } catch (err) {
      setError(err.message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  function handleCloseModal() {
    setSelectedMovie(null)
  }

  function handleAddToWatchlist(movie) {
    setWatchlist((currentWatchlist) => {
      const movieAlreadyExists = currentWatchlist.some((watchlistMovie) => {
        return watchlistMovie.id === movie.id
      })

      if (movieAlreadyExists) {
        return currentWatchlist
      }

      return [movie, ...currentWatchlist]
    })
  }

  function handleRemoveFromWatchlist(movieId) {
    setWatchlist((currentWatchlist) => {
      return currentWatchlist.filter((movie) => {
        return movie.id !== movieId
      })
    })
  }
  
  return (
    <div className='app'>
      <Header watchlistCount={watchlist.length}/>

      <main className='app-main'>
        <section className='left-column'>
          <SearchBar searchText={searchText} onSearchTextChange={setSearchText} onSearchSubmit={handleSearchSubmit} loading={loading}/>

          <div className='search-preview'>
            <p>Current input: <strong>{searchText || "nothing yet"}</strong></p>

            <p>
              Last submitted search:{" "}<strong>{submittedSearch || "nothing submitted yet"}</strong>
            </p>
          </div>

          <MovieGrid movies={movies} loading={loading} error={error} submittedSearch={submittedSearch} onSelectMovie={setSelectedMovie} onAddToWatchlist={handleAddToWatchlist} watchlist={watchlist}/>
        </section>

        <aside className='right-column'>
          <WatchListPanel watchlist={watchlist} onRemoveFromWatchlist={handleRemoveFromWatchlist} />
        </aside>
      </main>

      {selectedMovie && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} onAddToWatchlist={handleAddToWatchlist} isInWatchlist={watchlist.some((watchlistMovie) => {return watchlistMovie.id === selectedMovie.id})} />
      )}
    </div>
  )
}

export default App
