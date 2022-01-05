import React, { ReactNode, useState } from 'react'

import { User, UserSession } from '../entities'

interface ContextProps {
  isLoggedIn: boolean
  defaultLocation: null | string
  user: null | UserSession
  login: (user: User, token: string) => void
  setLocation: (location: string) => void
  logout: () => void
}

const defaultState = {
  isLoggedIn: false,
  defaultLocation: null,
  user: null,
  login: () => {},
  setLocation: () => {},
  logout: () => {},
}

const previousLoggin = JSON.parse(
  window.localStorage.getItem('userData') || ''
)

if (previousLoggin) {
  defaultState.isLoggedIn = true
  defaultState.user = previousLoggin
}

const UserContext = React.createContext<ContextProps>(defaultState)

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(defaultState.isLoggedIn)
  const [user, setUser] = useState<UserSession | null>(defaultState.user)
  const [defaultLocation, setDefaultLocation] = useState<string | null>(
    defaultState.defaultLocation
  )

  const login = (user: User, token: string) => {
    setIsLoggedIn(true)
    const userData: UserSession = {
      id: user.id,
      uid: user.uid,
      fullName: `${user.firstName} ${user.lastName}`,
      avatarUrl: user.avatarUrl,
      isAdmin: user.isAdmin,
      token: token,
    }
    setUser(userData)
    window.localStorage.setItem('userData', JSON.stringify(userData))
  }

  const setLocation = (location: string) => {
    setDefaultLocation(location)
  }

  const logout = () => {
    window.localStorage.removeItem('userData')
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        defaultLocation,
        login,
        setLocation,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
export { UserProvider }
