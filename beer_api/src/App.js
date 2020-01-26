// React imports
import React from "react";

// General imports
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
