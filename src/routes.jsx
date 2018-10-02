import React from 'react'
import Router from 'react-router-dom/Router'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import history from 'core/utils/route'
import Main from 'containers/Main'
import Processes from 'containers/Processes'
import Process from 'containers/Process'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Main} exact path="/" />
      <Route component={Processes} path="/processos" />
      <Route component={Process} exact path="/processo/:id" />
      <Route component={Main} />
    </Switch>
  </Router>
)

export default Routes
