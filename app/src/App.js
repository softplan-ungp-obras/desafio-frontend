import React from 'react';

// Sections
import ProcessosList from './components/sections/processos/list';
import ProcessosAdd from './components/sections/processos/add';

function App() {
  return (
    <div className="App">

      <ProcessosList />

      <hr />

      <ProcessosAdd />
      
      {/*
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
