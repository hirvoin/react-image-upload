import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import { SignUp } from "./components/SignUp"
import Store from "./Store"

export const App = () => {
  return (
    <Store>
      <Router>
        <div>
          <h1>React image upload appication with Firebase authentication</h1>
          <Login />
          <SignUp />
        </div>
      </Router>
    </Store>
  )
}

export default App
