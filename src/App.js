import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middlewares from './middlewares';

import Main from './pages/Main/Main';

const store = createStore(reducer, middlewares);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
