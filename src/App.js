import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
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

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
