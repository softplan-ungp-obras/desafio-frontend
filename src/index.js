import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { baseTheme } from './config/Theme';
import HomePage from './pages/HomePage';
import ListaProcessos from './pages/ListaProcessos';
import ProcessoEditor from './pages/ProcessoEditor';

const App = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/busca" component={ListaProcessos} />
          <Route path="/editor/:processoId?" component={ProcessoEditor} />
        </Switch>
      </BrowserRouter>
    </App>
  </ThemeProvider>,
  document.getElementById('root'),
);
