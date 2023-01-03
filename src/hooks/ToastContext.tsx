import React, { createContext, useContext, useCallback, PropsWithChildren } from 'react';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('add toast')
  }, [])

  const removeToast = useCallback(() => {
    console.log('rm toast')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
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