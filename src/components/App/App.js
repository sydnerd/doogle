import React, { useState}  from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import MainPage from '../MainPage/MainPage'
import BreedType from '../BreedType/BreedType';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <MainPage />
      </header>
      {/* <BreedType /> */}
    </div>
  );
}

  


export default App;
