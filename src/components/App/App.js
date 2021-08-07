import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import DogCard from '../DogCard/DogCard';
import { getDogImage } from '../../apiCalls';
import './App.css';

const App = () => {
  const [randomDog, setRandomDog] = useState('');
  const [matches, setMatches] = useState([]);
  const[removedDogs, setRemovedDogs] = useState([])
  const [error, setError] = useState('');

  useEffect(() => {
    getDogImage()
      .then((data)=> {
        setRandomDog(data.message)
      })
  },[matches, removedDogs])

  const addMatch = (matchedDog) => {
    if(!matches.includes(matchedDog)){
      setMatches([matchedDog, ...matches])
    }
    // setRandomDog('')
  }
  //
  const removeDog = (dog) => {
    setRemovedDogs([dog, ...removedDogs])
  }

  const multipleDogs = matches.map((match, i) => <DogCard key = {i} dog = {match} /> )

    return (
      <div className="app">
        <header className="App-header">
          <h1>Welcome to Doogle!</h1>
          <NavBar />
        </header>
        <main>
        <Switch>
          <Route exact path="/">
            <DogCard dog = {randomDog} addDog = {addMatch} removeDog = {removeDog}/>
          </Route>
          <Route path="/matches">
            {multipleDogs}
          </Route>
        </Switch> 
        </main>
      </div>
    ); 
}

export default App;
  
