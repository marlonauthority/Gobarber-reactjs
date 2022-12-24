import React from 'react';
import GlobalStyle from './styles/global';
import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    <SigIn />
    </>
  );
}

export default App;
