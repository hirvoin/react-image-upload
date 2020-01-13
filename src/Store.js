import React, { useState, useEffect } from "react"
import app from "./firebase.js"

export const UserContext = React.createContext()

const Store = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser)
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export default Store
