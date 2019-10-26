import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import history from '~/routes/history';
import './config/reactotron';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/components';
import Routes from './routes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <>
            <Wrapper>
              <Routes />
            </Wrapper>
            <GlobalStyle />
            <ToastContainer />
          </>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
