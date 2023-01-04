import React, { createContext, useContext, useCallback, PropsWithChildren, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';
interface ToastContextData {
  addToast(message: Omit<ToastMessagesState, 'id'>): void;
  removeToast(): void;
}

export interface ToastMessagesState {
  id: string
  type?: 'default' | 'success' | 'error'
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessagesState[]>([])

  const addToast = useCallback(({type, title, description}: Omit<ToastMessagesState, 'id'>) => {
    const id = uuid()

    const newtoast = {
      id, type, title, description
    }

    setMessages((prevMessages) => [...prevMessages, newtoast])
  }, [])

  const removeToast = useCallback(() => {
    console.log('rm toast')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages}/>
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext)
  
  if(!context) {
    throw new Error("useToast mus be used within a ToastProvider");
  }

  return context
}

export { ToastProvider, useToast }