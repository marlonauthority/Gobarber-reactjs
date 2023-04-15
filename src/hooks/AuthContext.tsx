import React, { createContext, useCallback, PropsWithChildren, useState, useContext } from 'react'
import api from '../utils/apiClient';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}
interface AuthState {
  token: string;
  user: User;
}
interface SignInCredentialsInterface {
  email: string;
  password: string;
}

interface AuthContextInterface {
 user: User;
 children?: React.ReactNode;
 login(credentials: SignInCredentialsInterface): Promise<void>;
 logout(): void;
 updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gobarber:token')
    const user = localStorage.getItem('@gobarber:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
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
    
    api.defaults.headers.authorization = `Bearer ${token}`;
    
    setData({ token, user })
}, []);


  const logout = useCallback(() => {
    localStorage.removeItem('@gobarber:token')
    localStorage.removeItem('@gobarber:user')
    
    setData({} as AuthState)
}, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@gobarber:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );


  return (
    <AuthContext.Provider value={{ user: data.user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextInterface {
  const context = useContext(AuthContext)

  return context
}
