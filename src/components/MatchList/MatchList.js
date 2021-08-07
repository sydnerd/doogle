import React from 'react';
import './MatchList.css';
import MatchedDogCard from '../MatchedDogCard/MatchedDogCard'

const MatchList = ({matches, dog}) => {
  const matchedDogs = matches.map((match, i) => {
    return (
      <MatchedDogCard
        key = {i}
        image = {match}
      /> 
    )   
  })
  return (
    <section className='matched-dogs-section'>
      <h2>Matches</h2>
      {matchedDogs}
    </section>
  )
}

export default MatchList 