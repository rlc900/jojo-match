import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'
import './App.css';
import React, { useState } from 'react';
// import FrontCard from './Components/FrontCard';
// import BackCard from './Components/BackCard';

function App() {

  const [isFlipped, setIsFlipped] = useState(false)

  function handleClick () {
    setIsFlipped(!isFlipped)
  }

  return (
  
        
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard onClick={handleClick}>
          <Logo src='./images/jojo.png'/>
        
        </FrontCard>
        <BackCard onClick={handleClick}>
          <Character src='./images/jojo_pony.png' alt='Zaddy'/>
        </BackCard>

        </ReactCardFlip>

  );
}

export default App;

const FrontCard = styled.div`
  height: 100px;
`

const BackCard = styled.div`
height: 100px;
`

const Character = styled.img`
height: 100px;
width: 100px;
`

const Logo = styled.img`
height: 100px;
width: 100px;
`