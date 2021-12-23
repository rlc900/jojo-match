import React from 'react';
import './Card.css'
// import styled from 'styled-components'
// import ReactCardFlip from 'react-card-flip';


function Card({card, handleChoice, flipped, disabled}) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

    return (
          <div className='card'>
            <div className={flipped ? "flipped" : ""}>
            <img 
                className='back' 
                src={card.img} 
                alt='card back'
              />
            <img 
                className='front' 
                src='./images/jojo.png' 
                onClick={handleClick}
                alt='card front'
              />
            </div>
          </div>
    );
  }
  
  export default Card;