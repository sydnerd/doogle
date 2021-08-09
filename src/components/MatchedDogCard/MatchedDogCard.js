import React from 'react';
import './MatchedDogCard.css';
import PropTypes from 'prop-types';

const MatchedDogCard = ({dog, id, deleteMatch}) => {
  return (
    <div className='card-container'>
      <img className='dog-image'src={dog} alt="dog" />
        <div className='icon-container'>
        <span className="material-icons delete" id={id} onClick ={(id) => deleteMatch(id)}>delete</span>
        </div> 
    </div>
  )
}

export default MatchedDogCard;

MatchedDogCard.propTypes = {
  dog: PropTypes.string,
  id: PropTypes.number,
  deleteMatch: PropTypes.func
}

