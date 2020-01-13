import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"

export const App = () => {
  return (
    <Router>
      <div>
        <h1>React image upload appication with Firebase authentication</h1>
        <Login />
      </div>
    </Router>
  )
}

export default App
