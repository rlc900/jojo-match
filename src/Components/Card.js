import React from 'react';
import './Card.css'
// import styled from 'styled-components'
// import ReactCardFlip from 'react-card-flip';


function Card({card, handleChoice}) {

  const handleClick = () => {
    handleChoice(card)
  }

    return (
          <div className='card'>
            <div>
              <img 
                className='front' 
                src={card.img} 
                alt='card front'
              />
              <img 
                className='back' 
                src='./images/jojo.png' 
                onClick={handleClick}
                alt='card back'
              />
            </div>
          </div>
    );
  }
  
  export default Card;