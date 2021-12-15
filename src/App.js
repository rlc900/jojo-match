// import styled from 'styled-components'
import './App.css';
import React, { useState } from 'react';
import Card from './Components/Card';

const jojoArr = [
  {
    img: './images/jojo_pony.png'
  },
  {
    img: './images/jonathan.png'
  },
  {
    img: './images/joseph.png'
  },
  {
    img: './images/josuke.png'
  },
  {
    img: './images/giorno.png'
  },
  {
    img: './images/jolyne.png'
  }
]

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...jojoArr, ...jojoArr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}));

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div>
      <button onClick={shuffleCards}>
        New Game
      </button>
      <Card/>
      </div>
  );
}

export default App;
