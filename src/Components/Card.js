import React from 'react';
// import styled from 'styled-components'
// import ReactCardFlip from 'react-card-flip';


function Card({cards}) {
    return (
      <div className='card-grid'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.img} alt='card front'/>
              <img className='back' src='./images/jojo.png' alt='card back'/>
            </div>
            </div>
        ))}
      </div>
    );
  }
  
  export default Card;