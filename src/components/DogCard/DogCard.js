import React from 'react';
import { Link } from 'react-router-dom';
import './DogCard.css';

const DogCard = ({dog, addDog, removeDog}) => {
  return (
    <div className='card-container'>
      <img className='dog-image'src={dog} alt="dog" />
        <div className='icon-container'>
          <span className='material-icons x icon' onClick={()=>removeDog(dog)}>close</span>
          <span className='material-icons heart icon' onClick={()=>addDog(dog)}>favorite</span>
        </div> 
    </div>
  )
}

export default DogCard;

