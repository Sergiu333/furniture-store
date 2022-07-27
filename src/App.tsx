import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import SimpleSlider from "./components/owl_carousel/owl_carousel";

function App() {
  return (
      <div>
          <Header/>

          <div className="App container mx-auto">
              {/*<SimpleSlider/>*/}
              <Content/>
          </div>

          <Footer/>
      </div>

  );
}

export default App;
