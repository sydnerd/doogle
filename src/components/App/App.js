import React, { useState, useEffect }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
      .catch(() => 
        setError(
          "We're experiencing server technical difficulties, please check back again later!"
        )
      );
  },[matches, removedDogs])

  const addMatch = (matchedDog) => {
    if(!matches.includes(matchedDog)){
      setMatches([...matches, matchedDog])
    }
  }
  
  const removeDog = (dog) => {
    setRemovedDogs([...removedDogs, dog])
  }

  const deleteMatch = (event) => {
    const updatedMatches = matches.filter((match, i) => {
      if(i !== parseFloat(event.target.id)) {
        return match
      }
    })
    setMatches(updatedMatches)
  }

  const loadingMsg = !randomDog.length && !error.length && (
    <h2 className='loading-message'>Loading image</h2>
  );

  const noMatchMsg = !matches.length && <h2 className='message'>No matches yet ☹️</h2>

    return (
      <div className="app">
        <header className="App-header">
          <div className='title-container'>
            <h1 className="title">doogle</h1>
            <div>
              <img className='logo-image' src={logo} alt='doogle logo'/>
              <p className='tag-line'>discover your <strong>golden</strong></p>
            </div>
          </div> 
          <NavBar />
        </header>
        <section>
          <Switch>
            <Route exact path="/">
              {loadingMsg}
              {!!error.length && <h2 className='error'>{error}</h2>}
              <DogCard dog = {randomDog} addDog = {addMatch} removeDog = {removeDog}/>
            </Route>
            <Route path="/matches">
              {noMatchMsg}
              <MatchList matches = {matches} deleteMatch = {deleteMatch} />
            </Route>
          </Switch>
          <Redirect to={"/"} />
        </section>
      </div>
    ); 
}

export default App;
  
