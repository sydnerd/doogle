import React, { useState}  from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import DogCard from '../DogCard/DogCard';
import MatchList from '../MatchList/MatchList'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Doogle!</h1>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/">
          <DogCard />
        </Route>
        <Route path="/matches">
          <MatchList />
        </Route>
      </Switch>
        
    </div>
  );
}

  


export default App;
