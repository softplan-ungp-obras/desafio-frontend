import React from 'react';
import {Route} from 'react-router-dom';
import {routes} from "./utils/RouterUtil";

// Sections
import ProcessosList from './components/sections/processos/list';
import ProcessosAdd from './components/sections/processos/add';

function App() {
  return (
    <div className="App">
      
      <Route exact
        path={routes.home.path}
        render={(props) => <ProcessosList {...props}/>}
      />

      <Route exact
        path={routes.add.path}
        render={(props) => <ProcessosAdd {...props}/>}
      />

      <Route exact
        path={routes.edit.path}
        render={(props) => <ProcessosAdd {...props}/>}
      />

      <Route exact
        path={routes.edit.path}
        render={(props) => <ProcessosAdd {...props}/>}
      />
      
    </div>
  );
}

export default App;
