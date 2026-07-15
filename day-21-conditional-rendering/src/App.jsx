import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      setIsLoading(true);
      setError("");


      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="app">
      <section className="container">
        <h1>User Directory</h1>

        <p className="subtitle">
          Search users and handle loading, errors, and empty states.
        </p>

        <input
          className="search-input"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          disabled={isLoading}
        />

        {isLoading && (
          <div className="message">
            <div className="spinner"></div>
            <p>Loading users...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="error-message">
            <h2>Something went wrong</h2>
            <p>{error}</p>
            <button onClick={fetchUsers}>Try again</button>
          </div>
        )}

        {!isLoading && !error && users.length === 0 && (
          <div className="empty-message">
            <h2>No users available</h2>
            <p>There are no users to display right now.</p>
          </div>
        )}

        {!isLoading &&
          !error &&
          users.length > 0 &&
          filteredUsers.length === 0 && (
            <div className="empty-message">
              <h2>No results found</h2>
              <p>No users match "{search}". Try another name.</p>
            </div>
          )}

        {!isLoading && !error && filteredUsers.length > 0 && (
          <div className="user-grid">
            {filteredUsers.map((user) => (
              <article className="user-card" key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;