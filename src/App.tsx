import React from 'react';
import GlobalStyle from './styles/global';

import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {

  return (
    <>
      <AuthProvider>
        <SigIn />
      </AuthProvider>
      
      <ToastContainer/>
      <GlobalStyle />
    </>
  );
}

export default App;
