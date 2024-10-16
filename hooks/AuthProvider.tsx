import {useContext, createContext, useState, useEffect} from "react";
import UserInterface from "@/types/auth/UserInterface";
import {useStorageState} from "@/hooks/useStorageState";
import {router} from "expo-router";
import { login as loginRequest, signUp as signUpRequest, getUser as getUserRequest } from '@/api/auth'
import {SignUpFormInterface} from "@/api/auth/types";
import {Platform} from "react-native";
import Toast from "react-native-toast-message";

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

  async function getUser() {
    try {
      const user = (await getUserRequest()).data
      const defaultCity = {
        id: 1,
        name: 'Ярославль'
      }
      setUser({
        ...user,
        city: defaultCity,
      })
    } catch (e) {
      router.push('/login')
    }
  }

  useEffect(() => {
    Toast.show({
      type: 'error',
      text1: 'Оши2бк',
      text2: token ?? '',
    })
    if (token) {
      getUser()
    }
  }, [token])
  return <AuthContext.Provider value={{ login, signUp, logOut, user, token }}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}