import React from 'react';
import './MatchList.css';
import MatchedDogCard from '../MatchedDogCard/MatchedDogCard'

const MatchList = ({matches, dog}) => {
  const matchedDogs = matches.map((match, i) => {
    console.log("matches", matches)
    console.log("match", match)
    return (
      <MatchedDogCard
        key = {i}
        dog = {match}
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