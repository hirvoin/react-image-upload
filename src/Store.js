import React, { useState, useEffect } from "react"

export const UserContext = React.createContext(null)

const Store = ({ children }) => {
  const [user, setUser] = useState(initialUser)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default Store
