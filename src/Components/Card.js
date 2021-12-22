import React from 'react';
import './Card.css'
// import styled from 'styled-components'
// import ReactCardFlip from 'react-card-flip';


function Card({card}) {
    return (
          <div className='card'>
            <div>
              <img className='front' src={card.img} alt='card front'/>
              <img className='back' src='./images/jojo.png' alt='card back'/>
            </div>
            </div>
    );
  }
  
  export default Card;