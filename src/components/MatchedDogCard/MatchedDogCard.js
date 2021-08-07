import React from 'react';
import { Link } from 'react-router-dom';
import './MatchedDogCard.css';

const MatchedDogCard = ({dog}) => {
  return (
    <div className='card-container'>
      <img className='dog-image'src={dog} alt="dog" />
        <div className='icon-container'>
        <span className="material-icons delete">delete</span>
        </div> 
    </div>
  )
}

export default MatchedDogCard;

