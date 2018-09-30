import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { baseTheme } from './config/Theme';

const App = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <App>
      <BrowserRouter>
        <Switch />
      </BrowserRouter>
    </App>
  </ThemeProvider>,
  document.getElementById('root'),
);
