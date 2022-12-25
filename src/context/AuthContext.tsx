import React, { createContext, useCallback, PropsWithChildren, useState } from 'react'
import api from '../utils/apiClient';

interface AuthState {
  token: string;
  user: object;
}
interface SignInCredentialsInterface {
  email: string;
  password: string;
}

interface AuthContextInterface {
 user: object;
 children?: React.ReactNode;
 login(credentials: SignInCredentialsInterface): Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gobarber:token')
    const user = localStorage.getItem('@gobarber:user')

    if (token && user) {
      return { token, user: JSON.parse(user)}
    }

    return {} as AuthState
  })

  const login = useCallback(async({ email, password }: SignInCredentialsInterface) => {
    const response = await api.post('sessions', {
        email,
        password,
    })

    const { token, user } = response.data;
    localStorage.setItem('@gobarber:token', token)
    localStorage.setItem('@gobarber:user', JSON.stringify(user))
    
    setData({ token, user })
}, []);


  return (
    <AuthContext.Provider value={{ user: data.user, login }}>
      {children}
    </AuthContext.Provider>
  )
}
