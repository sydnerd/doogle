import React from 'react';
import { useState } from "react";
import heart from '../../resources/heart.svg';
import x from '../../resources/x.svg';
// import logo from '../../resources/doogle_logo.png';
import './DogCard.css';

const DogCard = ({dog, addDog}) => {
  const[newDog]= useState(dog);
  console.log('dog', dog)
  console.log('matched dog', newDog)
  return (
    <div className='card-container'>
       {/* <img className='logo-image' src={logo} alt='doogle logo'/> */}
        <img className='dog-image'src={dog} alt="dog" />
        <div className='icon-container'>
          <img className='x icon'src={x}/>
          <img className='heart icon'src={heart} onClick={() => addDog(newDog)}/>
        </div> 
    </div>
   
  )
}

export default DogCard;