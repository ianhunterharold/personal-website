import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main.js';
import SideBar from './components/SideBar.js'; 

function App() {
  return (
    <div className="App">
          <Main></Main>
          <SideBar></SideBar>
    </div>
  );
}

export default App;
