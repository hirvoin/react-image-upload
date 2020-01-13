import React, { useContext, useState } from "react"
import app from "../firebase"
import { UserContext } from "../Store"
import { withRouter, Redirect } from "react-router"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { user } = useContext(UserContext)

  const handleLogin = async event => {
    event.preventDefault()
    try {
      console.log("logging in with credentials", email, password)
      await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async event => {
    event.preventDefault()
    try {
      await app.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }

  if (user) {
    return <button onClick={handleLogout}>Log Out</button>
  }

  return (
    <div>
      <h2>Log In</h2>
      <button onClick={handleLogout}>Log Out</button>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default withRouter(Login)
