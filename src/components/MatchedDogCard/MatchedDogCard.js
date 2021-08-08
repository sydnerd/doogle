import React from 'react';
import './MatchedDogCard.css';

const MatchedDogCard = ({dog, id, deleteMatch}) => {
  return (
    <div className='card-container'>
      <img className='dog-image'src={dog} alt="dog" />
        <div className='icon-container'>
        <span className="material-icons delete" id={id} onClick={() => deleteMatch(id)}>delete</span>
        </div> 
    </div>
  )
}

export default MatchedDogCard;

