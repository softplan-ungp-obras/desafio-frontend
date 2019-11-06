import React from 'react';
import { Router } from '@reach/router';

import Home from 'pages/Home';
import Processes from 'pages/Processes';

import { ROUTES } from 'constants/routes';

import './App.css';

function App() {
  return (
    <Router>
      <Home path={ROUTES.DEFAULT} />
      <Processes path={ROUTES.PROCESSES} />
      <Processes path={ROUTES.PROCESSES_WITH_PARAM} />
      <Processes path={ROUTES.NEW_PROCESS} />
    </Router>
  );
}

export default App;
