import React from 'react';
import logo from './logo.svg';
import './style/App.scss';

import Main from './containers/Main.js';
import SideBar from './components/SideBar.js'; 

function App() {
  return (
    <div className="app-container">
          <Main></Main>
          <SideBar></SideBar>
    </div>
  );
}

export default App;
