import {useContext, createContext, useState} from "react";
import UserInterface from "@/types/auth/UserInterface";
import {useStorageState} from "@/hooks/useStorageState";
import {router} from "expo-router";
import { login as loginRequest } from '@/api/auth'

const AuthContext = createContext<{
  login: (email: string, password: string) => void,
  logOut: () => void,
  token: string | null,
  user: UserInterface | null,
}>({
  login: (email: string, password: string) => null,
  logOut: () => null,
  token: null,
  user: null,
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserInterface|null>(null)
  const [[isLoading, token], setToken] = useStorageState('token')

  async function login(email: string, password: string) {
    const user = await loginRequest(email, password)
    setUser({
      name: user.name,
      email: user.email,
      lastName: user.surName
    })
    setToken(user.token)
    router.push('/')
  }

  function logOut() {
    setUser(null)
    setToken(null)
  }

  return <AuthContext.Provider value={{ login, logOut, user, token }}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}