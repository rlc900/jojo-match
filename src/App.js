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

const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)

const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


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
      <h1>Jojo Match</h1>
      <button onClick={shuffleCards}> New Game </button>

      <div className='card-grid'>
      {cards.map(card => (
        <Card 
        card={card} 
        key={card.id}
        handleChoice={handleChoice}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
