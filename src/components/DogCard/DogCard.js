import React from 'react';
import heart from '../../resources/heart.svg';
import x from '../../resources/x.svg';
// import logo from '../../resources/doogle_logo.png';
import './DogCard.css';

const DogCard = ({randomDog}) => {
  return (
    <div>
       {/* <img src={logo} alt='doogle logo'/> */}
        <img src={randomDog} alt="dog" />
        <div>
          <img className="heart"src={heart}/>
          <img className="x"src={x}/>
        </div>
        
    </div>
   
  )
}

export default DogCard;