// Card.js
import React from 'react';
import '../assets/card.css'
const CustomCard = ({ name, designation, date, feedback }) => {
  return (
    <div className='cardT'>
        <div className='card-header'>
          <div className='card-header-left'>
            <h1>{name}</h1>
            <p>{designation}</p>
          </div>
          <h3>{date}</h3>
        </div>
        <p>{feedback}</p>
    </div>
  );
};

export default CustomCard;
