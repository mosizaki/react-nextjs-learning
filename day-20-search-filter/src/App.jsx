import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [searchTerm, setSreachTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedCompany, setSelectedCompany] = useState("all")
  const [selectedDomain, setSelectedDomain] = useState("all")

  useEffect(() => {
    async function fetchUsers () {

      try {
        setIsLoading(true)
        setError("")

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
          throw new Error("Failed to fetch users!")
        }

        const data = await response.json()
      
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const uniqueCities = [...new Set(users.map((user) => user.address.city))]

  const uniqueCompanies = [...new Set(users.map((user) => user.company.name))]

  const uniqueDomains = [...new Set(users.map((user) => user.email.split("@")[1]))]

  const filteredUsers = users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesUserName = user.username.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesEmail = user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSearch = matchesName || matchesUserName || matchesEmail

    const matchesCity = selectedCity === "all" || user.address.city === selectedCity

    const matchesCompany = selectedCompany === "all" || user.company.name === selectedCompany

    const matchesDomain = selectedDomain === "all" || user.email.endsWith(selectedDomain)
 
    return matchesSearch && matchesCity && matchesCompany && matchesDomain
  })


  return (
    <main>
      <h1>User Directory</h1>

      <input 
        type="text" 
        placeholder='Search by name...'
        value={searchTerm}
        onChange={(event) => setSreachTerm(event.target.value)}
      />

      <select
        value={selectedCity}
        onChange={(event) => setSelectedCity(event.target.value)}
      >
        <option value="all">All cities</option>

        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select value={selectedDomain} onChange={(event) => setSelectedDomain(event.target.value)}>
        <option value="all">All domains</option>

        {uniqueDomains.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>

      <select
        value={selectedCompany}
        onChange={(event) => setSelectedCompany(event.target.value)}
      >
        <option value="all">All companies</option>

        {uniqueCompanies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>

      <button onClick={() => setSreachTerm("")}>Clear Search</button>

      {isLoading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {searchTerm && <p>Search results for "{searchTerm}"</p>}

      {!isLoading && !error && (
        <>
          <p>Showing {filteredUsers.length} of {users.length} users</p>

          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>
                <h2>{user.name}</h2>
                <p><strong>UserName:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}


    </main>
  )
}

export default App
