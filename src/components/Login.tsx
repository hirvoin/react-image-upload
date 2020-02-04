import React, { useContext, useState } from "react"
import app from "../firebase"
import { UserContext } from "../Store"
import { withRouter, Redirect } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const { currentUser } = useContext(UserContext)

  const handleLogin = async (event: any) => {
    event.preventDefault()
    try {
      console.log("logging in with credentials", email, password)
      await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async (event: any) => {
    event.preventDefault()
    try {
      await app.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }

  if (currentUser) {
    return <button onClick={() => handleLogout}>Log Out</button>
  }

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={event => handleLogin(event)}>
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
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default withRouter(Login)
