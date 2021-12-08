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
    <div className="App">
        <h1>
          Learn React
        </h1>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard>
          Front of Card
        <button onClick={handleClick}>Click to flip</button>
        </FrontCard>
        <BackCard>
          Back of Card
        <button onClick={handleClick}>Click to flip</button>
        </BackCard>

        </ReactCardFlip>
    </div>
  );
}

export default App;

const FrontCard = styled.div``

const BackCard = styled.div``