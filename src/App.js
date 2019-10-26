import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Wrapper>
            <Routes />
          </Wrapper>
          <GlobalStyle />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
