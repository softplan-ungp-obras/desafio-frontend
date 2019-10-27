import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middlewares from './middlewares';

import Main from './pages/Main/Main';
import ProcessList from './pages/ProcessList/ProcessList';
import ProcessDetail from './pages/ProcessDetail/ProcessDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const store = createStore(reducer, middlewares);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/process-list" component={ProcessList} />
          <Route path="/process-detail/process=:id" component={ProcessDetail} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
