import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import DogCard from '../DogCard/DogCard';
import MatchList from '../MatchList/MatchList';
import { getDogImage } from '../../apiCalls';
import logo from '../../resources/doogle_logo.png';
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

  // const multipleDogs = matches.map((match, i) => <DogCard key = {i} dog = {match} /> )

    return (
      <div className="app">
        <header className="App-header">
          <div className='title-container'>
            <h1>Welcome to Doogle!</h1>
            <img className='logo-image' src={logo} alt='doogle logo'/>
          </div> 
          <NavBar />
        </header>
        <section>
        <Switch>
          <Route exact path="/">
            <DogCard dog = {randomDog} addDog = {addMatch} removeDog = {removeDog}/>
          </Route>
          <Route path="/matches">
            {/* {multipleDogs} */}
            <MatchList matches = {matches} />
          </Route>
        </Switch> 
        </section>
      </div>
    ); 
}

export default App;
  
