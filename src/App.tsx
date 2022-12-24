import React from 'react';
import GlobalStyle from './styles/global';
import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';
import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Marlondck' }}>
        <SigIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
