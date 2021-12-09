import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'
import './App.css';
import React, { useState } from 'react';
// import FrontCard from './Components/FrontCard';
// import BackCard from './Components/BackCard';

function App() {

  const jojoArr = [
    {
      id: 1,
      name: 'Jotaro',
      img: './images/jojo_pony.png'
    },
    {
      id: 2,
      name: 'Jonathan',
      img: './images/jonathan.png'
    },
    {
      id: 3,
      name: 'Joseph',
      img: './images/joseph.png'
    },
    {
      id: 4,
      name: 'Josuke',
      img: './images/josuke.png'
    },
    {
      id: 5,
      name: 'Giorno',
      img: './images/giorno.png'
    },
    {
      id: 6,
      name: 'Jolyne',
      img: './images/jolyne.png'
    }
  ]

  const [isFlipped, setIsFlipped] = useState(false)

  function handleClick () {
    setIsFlipped(!isFlipped)
  }

  return (
    <div>
      {jojoArr.map((jojo) => {
        return <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard onClick={handleClick}>
          <Logo src='./images/jojo.png' alt='logo'/>
        
        </FrontCard>
        <BackCard onClick={handleClick}>
          <Character src={jojo.img} alt='Jojo'/>
        </BackCard>
        </ReactCardFlip>
      })}
        </div>
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