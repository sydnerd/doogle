import React from 'react';
import heart from '../../resources/heart.svg';
import x from '../../resources/x.svg';
// import logo from '../../resources/doogle_logo.png';
import './DogCard.css';

const DogCard = ({randomDog}) => {
  return (
    <div className='card-container'>
       {/* <img className='logo-image' src={logo} alt='doogle logo'/> */}
        <img className='dog-image'src={randomDog} alt="dog" />
        <div className='icon-container'>
          <img className='x'src={x}/>
          <img className='heart'src={heart}/>
        </div> 
    </div>
   
  )
}

export default DogCard;