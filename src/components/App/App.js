import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import DogCard from '../DogCard/DogCard';
import { getDogImage } from '../../apiCalls';
import './App.css';

const App = () => {
  const [randomDog, setRandomDog] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getDogImage()
      .then((data)=> {
        setRandomDog(data.message)
      })
  },[])

  const addMatch = (matchedDog) => {
    if(!matches.includes(matchedDog)){
      setMatches({matchedDog, ...matches})
    }
  }

  //need to add an else statement, if it does include it, render the dog
  //Need to add that it needs to do a new fetch once it is matched
  //need to render the matched dogs on the matched page
  //why doesn't it show the dog image for the matched dogs. 

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Doogle!</h1>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            {/* <DogCard dog = {randomDog} /> */}
            <DogCard dog = {randomDog} addDog = {addMatch}/>
          </Route>
          <Route path="/matches">
            <DogCard dog = {matches} />
          </Route>
        </Switch>  
      </div>
    ); 
}

export default App;
  
