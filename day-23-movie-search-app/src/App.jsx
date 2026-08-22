import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MovieGrid from './components/MovieGrid'
import WatchListPanel from './components/WatchListPanel'

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

function formatMovieFromApi (apiMovie) {
  return {
    id: String(apiMovie.trackId),
    title: apiMovie.trackName || "Untitled movie",
    year: apiMovie.releaseDate ? apiMovie.releaseDate.slice(0, 4) : "Unknown",
    type: apiMovie.primaryGenreName || "Movie",
    poster: apiMovie.artworkUrl100
      ? apiMovie.artworkUrl100.replace("100x100", "300x300")
      : "",
    description:
      apiMovie.longDescription ||
      apiMovie.shortDescription ||
      "No description available.",
  }
}

function App() {

  const [movies, setMovies] = useState(fakeMovies)
  const [searchText, setSearchText] = useState("")
  const [submittedSearch, setSubmittedSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  async function handleSearchSubmit(event) {
    event.preventDefault()

    const searchTerm = searchText.trim()

    if (searchTerm === "") {
      return
    }

    try {
      setLoading(true)
      setError("")
      setSubmittedSearch(searchTerm)

      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
        searchTerm
      )}&media=movie&limit=12`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error("Failed to fetch movies.")
      }

      const data = await response.json()

      const formattedMovies = data.results.map((apiMovie) => {
        return formatMovieFromApi(apiMovie)
      })

      setMovies(formattedMovies)
    } catch (err) {
      setError(err.message)
      setMovies([])
    } finally {
      setLoading(false)
    }
    

    

    setSubmittedSearch(searchText.trim())
  }
  
  return (
    <div className='app'>
      <Header/>

      <main className='app-main'>
        <section className='left-column'>
          <SearchBar searchText={searchText} onSearchTextChange={setSearchText} onSearchSubmit={handleSearchSubmit}/>

          <div className='search-preview'>
            <p>Current input: <strong>{searchText || "nothing yet"}</strong></p>

            <p>
              Last submitted search:{" "}<strong>{submittedSearch || "nothing submitted yet"}</strong>
            </p>
          </div>

          <MovieGrid movies={movies} loading={loading} error={error} submittedSearch={submittedSearch}/>
        </section>

        <aside className='right-column'>
          <WatchListPanel />
        </aside>
      </main>
    </div>
  )
}

export default App
