import React from 'react';
import './DogCard.css';

const DogCard = ({randomDog}) => {
  return (
    <div>
       <h1>Logo will go here</h1>
        <img src={randomDog} alt="dog" />
        <div>
          <span className="material-icons-outlined">favorite</span>
          <span className="material-icons-outlined">cancel</span>
        </div>
        
    </div>
   
  )
}

export default DogCard;