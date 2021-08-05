import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import DogCard from '../DogCard/DogCard';
import MatchList from '../MatchList/MatchList';
import { getDogImage } from '../../apiCalls';
import './App.css';

export default class App extends Component {
  // const [dogImages, setDogImages] = useState([]);
  // const [randomDog, setRandomDog] = useState('');
  // // const [error, setError] = useState('');

  // const retrieveDogs = () => {
  //   getDogImage()
  //   .then((data) => setDogImages(data))
  // }
  constructor() {
    super()
    this.state = {
      dogImages:[],
      randomDog:'',
      error:'',
    }
  }

  componentDidMount = () => {
    getDogImage()
    .then((data)=> {
      this.setState({dogImages:data.message})
      this.randomizeDogImage()
    })
  }

  randomizeDogImage = () => {
    const getRandomDog = this.state.dogImages[Math.floor(Math.random()* this.state.dogImages.length)]
    this.setState({randomDog: getRandomDog})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Doogle!</h1>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <DogCard randomDog = {this.state.randomDog}/>
          </Route>
          <Route path="/matches">
            <MatchList />
          </Route>
        </Switch>  
      </div>
    );
  }
  
}

  
