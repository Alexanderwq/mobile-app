import {useContext, createContext, useState, useEffect} from "react";
import UserInterface from "@/types/auth/UserInterface";
import {useStorageState} from "@/hooks/useStorageState";
import {router} from "expo-router";
import { login as loginRequest, signUp as signUpRequest } from '@/api/auth'
import {SignUpFormInterface} from "@/api/auth/types";
import {Platform} from "react-native";

const AuthContext = createContext<{
  login: (email: string, password: string) => void,
  logOut: () => void,
  signUp: (data: SignUpFormInterface) => void,
  token: string | null,
  user: UserInterface | null,
}>({
  login: (email: string, password: string) => null,
  signUp: (data: SignUpFormInterface) => null,
  logOut: () => null,
  token: null,
  user: null,
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserInterface|null>(null)
  const [[isLoading, token], setToken] = useStorageState('token')

  async function login(email: string, password: string) {
    const token = (await loginRequest(email, password, `${Platform.OS}/react-app`)).data
    setToken(token)
    router.push('/')
  }

  async function signUp(data: SignUpFormInterface) {
    const token = (await signUpRequest({...data, device_name: `${Platform.OS}/react-app`})).data
    setToken(token)
    router.push('/')
  }

  function logOut() {
    setUser(null)
    setToken(null)
  }

  function getUser() {
    setUser({
      name: 'sanya',
      email: 'test@test.ru',
      city: {
        id: 1,
        name: 'Ярославль'
      },
    })
  }

  useEffect(() => {
    if (token) {
      getUser()
    }
  }, [token])
  return <AuthContext.Provider value={{ login, signUp, logOut, user, token }}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}