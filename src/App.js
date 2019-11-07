import React from 'react';
import { Router } from '@reach/router';
import { ToastContainer } from 'react-toastify';

import Home from 'pages/Home';
import Processes from 'pages/Processes';

import { ROUTES } from 'constants/routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Router>
        <Home path={ROUTES.DEFAULT} />
        <Processes path={ROUTES.PROCESSES} />
        <Processes path={ROUTES.PROCESSES_WITH_PARAM} />
        <Processes path={ROUTES.NEW_PROCESS} />
      </Router>
    </>
  );
}

export default App;
