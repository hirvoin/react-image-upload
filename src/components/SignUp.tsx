import React, { useContext, useState } from "react"
import app from "../firebase"

export const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async (event: any) => {
    event.preventDefault()
    try {
      await app.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
