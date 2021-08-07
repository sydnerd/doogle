import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../../resources/heart.svg';
import x from '../../resources/x.svg';
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

{/* <img className='logo-image' src={logo} alt='doogle logo'/> */}