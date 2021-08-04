import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';

const DogCard = ({randomDog}) => {
  return (
    <div>
       <h1>This is where the card will go</h1>
        <img src={randomDog} />
    </div>
   
  )
}

export default DogCard;