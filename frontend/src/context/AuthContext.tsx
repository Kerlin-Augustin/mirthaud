import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  email: string | null
  accessToken: string | null
  username: string | null,
  login: (
    email: string, 
    accessToken: string, 
    username: string, 
  ) => void
  logout: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [email, setEmail] = useState<string | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  const login = (email: string, accessToken: string, username: string) => {
    setEmail(email)
    setAccessToken(accessToken)
    setUsername(username)
  }

  const logout = () => {
    setEmail(null)
    setAccessToken(null)
    setUsername(null)
  }

  return (
    <AuthContext.Provider value={{ email, accessToken, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
