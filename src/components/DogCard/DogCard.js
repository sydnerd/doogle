import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import heart from '../../resources/heart.svg';
import x from '../../resources/x.svg';
// import logo from '../../resources/doogle_logo.png';
import './DogCard.css';

const DogCard = ({dog, addDog}) => {
  return (
    <div className='card-container'>
       {/* <img className='logo-image' src={logo} alt='doogle logo'/> */}
        <img className='dog-image'src={dog} alt="dog" />
        <div className='icon-container'>
          <img className='x icon'src={x}/>
          <img className='heart icon'src={heart} onClick={() => addDog(dog)}/>
        </div> 
    </div>
  )
}

export default DogCard;