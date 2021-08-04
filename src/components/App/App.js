import React, { useState}  from 'react';
import NavBar from '../NavBar/NavBar';
import BreedType from '../BreedType/BreedType';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Doogle
       </h1>
       <NavBar />
      </header>
      <BreedType />
    </div>
  );
}

  


export default App;
