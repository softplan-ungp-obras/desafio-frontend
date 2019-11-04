import React from "react";
import { Router } from "@reach/router";

import Home from "pages/Home";
import Processes from "pages/Processes";

import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Processes path="/processes" />
      <Processes path="/processes/:searchTextFromUrl" />
    </Router>
  );
}

export default App;
