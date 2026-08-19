import {useState} from "react"
import './App.css'
import Button from './components/ui/Button'
import Input from "./components/ui/Input"
import Card from "./components/ui/Card"
import Badge from "./components/ui/Badge"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSaveUser() {
    alert(`Saved user: ${name} - ${email}`)
  }

  function handleDeleteAccount() {
    alert("Account deleted!")
  }

  return (
    <main className='page'>
      <h1>Reusable UI Practice</h1>

      <Card title="Create user" subtitle="Add a new user to the system">
        <Badge variant="success">Active</Badge>

        <Input
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          error={name.length > 0 && name.length < 3 ? "Name is too short" : ""}
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <Button onClick={handleSaveUser}>Save User</Button>
      </Card>

      <Card title="Payment status" subtitle="Latest invoice information">
        <Badge variant="warning">Pending</Badge>
        <p>Your invoice is waiting for confirmation.</p>
        <Button variant="secondary">View Invoice</Button>
      </Card>

      <Card title="Danger zone" subtitle="Be careful with this action">
        <Badge variant="danger">Critical</Badge>
        <p>This action cannot be undone.</p>
        <Button variant="danger" onClick={handleDeleteAccount}>Delete Account</Button>
      </Card>
    </main>
  )
}

export default App
