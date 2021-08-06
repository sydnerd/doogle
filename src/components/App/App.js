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
    console.log('here')
    getDogImage()
      .then((data)=> {
        setRandomDog(data.message)
      })
  },[matches])

  const addMatch = (matchedDog) => {
    console.log('matched dog app', matchedDog)
    if(!matches.includes(matchedDog)){
      setMatches([matchedDog, ...matches])
    }
    // setRandomDog('')
  }

  //need to add an else statement, if it does include it, render the dog
  //Need to add that it needs to do a new fetch once it is matched
  //need to render the matched dogs on the matched page
  //why doesn't it show the dog image for the matched dogs. 
    const multipleDogs = matches.map((match, i) => <DogCard key = {i} dog = {matches} /> )

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
            {multipleDogs}
          </Route>
        </Switch>  
      </div>
    ); 
}

export default App;
  
