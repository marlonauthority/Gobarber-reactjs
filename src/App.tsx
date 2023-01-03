import React from 'react';
import GlobalStyle from './styles/global';

import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';

import AppProviderGlobal from './hooks';



const App: React.FC = () => {
  return (
    <>
      <AppProviderGlobal>
        <SigIn />
      </AppProviderGlobal>

      <GlobalStyle />
    </>
  );
}

export default App;
