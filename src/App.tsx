import React from 'react';
import GlobalStyle from './styles/global';
import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {

  return (
    <>
      <AuthProvider>
        <SigIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
