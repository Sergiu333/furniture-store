import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
        <Header/>
      <header className="App-header">
          <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <div className={"underline underline-offset-1"}>tailwind is work</div>
      </header>
    </div>
  );
}

export default App;
