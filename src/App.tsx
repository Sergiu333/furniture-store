import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import MainContent from "./components/main-content/main-content";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
  );
}

export default App;
