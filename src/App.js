import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import history from '~/routes/history';
import './config/reactotron';
import GlobalStyle from './styles/global';

import { Wrapper } from './styles/components';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <>
          <Wrapper>
            <Routes />
          </Wrapper>
          <GlobalStyle />
          <ToastContainer />
        </>
      </Router>
    </Provider>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
