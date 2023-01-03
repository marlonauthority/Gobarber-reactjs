import React, {PropsWithChildren} from 'react';

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";

const AppProviderGlobal: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  );
}

export default AppProviderGlobal;