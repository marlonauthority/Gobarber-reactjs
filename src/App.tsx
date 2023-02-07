import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProviderGlobal from './hooks';
import RoutesApp from './routes';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProviderGlobal>
          <RoutesApp />
      </AppProviderGlobal>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
