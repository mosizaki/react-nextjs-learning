import { useState } from 'react'

import './App.css'

import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Card from './components/ui/Card'
import Badge from './components/ui/Badge'
import UserCard from './components/UserCard'
import UserList from './components/UserList'


function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSaveUser() {
    alert(`Saved user: ${name} - ${email}`)
  }

  function handleDeleteAcount() {
    alert("Accout deleted!")
  }


  return (
    <main className='page'>
      <h1>Reusable UI Practice</h1>

      <Card title="Create User" subtitle="Add a new user to the system">
        <Badge variant='success'>Active</Badge>

        <Input
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          error={name.length > 0 && name.length < 3 ? "Name is too short" : ""}
        />

        <Input
          label="Email"
          type='emeil'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <Button onClick={handleSaveUser}>Save User</Button>
      </Card>

      <Card title="Payment Status" subtitle="Latest invoice information">
        <Badge variant='warning'>Pending</Badge>
        <p>Your invoice is waiting for confirmation</p>
        <Button variant='secondary'>View Invoice</Button>
      </Card>

      <Card title="Danger Zone" subtitle="Be careful with this action">
        <Badge variant='danger'>Critical</Badge>
        <p>This action cannot be undone.</p>
        <Button variant='danger' onClick={handleDeleteAcount}>Delete Account</Button>
      </Card>

      <UserCard/>
      <UserList/>
    </main>
  )
}

export default App
