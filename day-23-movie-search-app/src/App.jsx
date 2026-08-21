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

function App() {

  const [searchText, setSearchText] = useState("")
  
  return (
    <div className='app'>
      <Header/>

      <main className='app-main'>
        <section className='left-column'>
          <SearchBar searchText={searchText} onSearchTextChange={setSearchText}/>

          <p className='search-preview'>
            Current search: {searchText || "nothing yet"}
          </p>

          <MovieGrid movies={fakeMovies}/>
        </section>

        <aside className='right-column'>
          <WatchListPanel />
        </aside>
      </main>
    </div>
  )
}

export default App
