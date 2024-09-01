import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleUserAdded = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)
    fetch('http://localhost:5000/users',{
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'content-type':'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleUserAdded}>
        <input type="text" name='name' /> <br />
        <input type="email" name='email' /> <br />
        <input type="submit" value='Add user' />

      </form>
    </>
  )
}

export default App
