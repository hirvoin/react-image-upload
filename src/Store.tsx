import React, { useState, useEffect } from "react"
import app from "./firebase"

export const UserContext = React.createContext(undefined)

const Store = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any | undefined>(undefined)
  console.log("currentuser", currentUser)

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <UserContext.Provider
      value={{
        user: currentUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default Store
