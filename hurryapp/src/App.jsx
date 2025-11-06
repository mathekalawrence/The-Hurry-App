import React from 'react';
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profiles</h1>
        <div className="profiles-container">
          {/* Profile 1 */}
          <Profile 
            firstName="Muia" 
            lastName="Larry" 
            age={28}
          />
          
          {/* Profile 2 */}
          <Profile 
            firstName="Sarah" 
            lastName="Kariuki" 
            age={32}
          />
          
          {/* Profile 3 - With missing props (uses default) */}
          <Profile 
            firstName="Mike" 
          />
        </div>
      </header>
    </div>
  );
}

export default App;
