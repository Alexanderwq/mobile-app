import {useContext, createContext, useState} from "react";
import UserInterface from "@/types/auth/UserInterface";
import {useStorageState} from "@/hooks/useStorageState";

const AuthContext = createContext<{
  login: () => void,
  logOut: () => void,
  token: string | null,
  user: UserInterface | null,
}>({
  login: () => null,
  logOut: () => null,
  token: null,
  user: null,
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserInterface|null>(null)
  const [[isLoading, token], setToken] = useStorageState('token')

  function login() {
    // try {
    //   await loginRequest(email, password)
    // } catch (e) {
    //   console.log(e)
    // }
  }

  function logOut() {
    setUser(null)
    setToken('')
  }

  return <AuthContext.Provider value={{ login, logOut, user, token }}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}