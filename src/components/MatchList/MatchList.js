import React from 'react';
import './MatchList.css';
import MatchedDogCard from '../MatchedDogCard/MatchedDogCard'

const MatchList = ({matches, deleteMatch}) => {
  const matchedDogs = matches.map((match, i) => {
    return (
      <MatchedDogCard
        key = {i}
        id = {i}
        dog = {match}
        deleteMatch = {deleteMatch}
      /> 
    )   
  })
  return (
    <section className='matched-dogs-section'>
      {matchedDogs}
    </section>
  )
}

export default MatchList 