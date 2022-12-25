import React, { createContext, useCallback, PropsWithChildren } from 'react'
import api from '../utils/apiClient';

interface SignInCredentialsInterface {
  email: string;
  password: string;
}

interface AuthContextInterface {
 name?: string;
 children?: React.ReactNode;
 login(credentials: SignInCredentialsInterface): Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const login = useCallback(async({ email, password }: SignInCredentialsInterface) => {
    const response = await api.post('sessions', {
        email,
        password,
    })

    console.log(response.data);
}, []);


  return (
    <AuthContext.Provider value={{ name: 'Marlondck', login }}>
      {children}
    </AuthContext.Provider>
  )
}
