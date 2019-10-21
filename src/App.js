import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
