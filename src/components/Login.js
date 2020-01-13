import React, { useContext, useState } from "react"
import app from "../firebase"
import UserContext from "../Store"
import { withRouter, Redirect } from "react-router"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user = useContext(UserContext)

  const handleLogin = async () => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h2>Login Page</h2>
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
