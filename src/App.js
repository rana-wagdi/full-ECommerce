import React from "react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'


function App() {

  return (
  
    <div className="App">
      <div className="grid-container">
      <Header />
      
      <Main />
    <Footer />
    </div>
    </div>

  );
  
}
export default App;
