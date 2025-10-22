'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  email: string
  role: 'client' | 'mentor' | 'admin'
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, password: string, role: string) => {
    // For now, simulate login - later we'll connect to backend
    const mockUser: User = {
      id: '1',
      email: email,
      role: role as 'client' | 'mentor' | 'admin',
      name: role === 'client' ? 'Client User' : 
            role === 'mentor' ? 'Mentor User' : 'Admin User'
    }
    setUser(mockUser)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
