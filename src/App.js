// import styled from 'styled-components'
import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Card';

const jojoArr = [
  {
    img: './images/jotaro.png', 
    matched: false
  },
  {
    img: './images/jonathan.png', 
    matched: false
  },
  {
    img: './images/joseph.png', 
    matched: false
  },
  {
    img: './images/josuke.png', 
    matched: false
  },
  {
    img: './images/giorno.png', 
    matched: false
  },
  {
    img: './images/jolyne.png', 
    matched: false
  },
  {
    img: './images/avdol.png', 
    matched: false
  },
  {
    img: './images/iggy.png', 
    matched: false
  },
  {
    img: './images/kakyoin.png', 
    matched: false
  },
  {
    img: './images/polnareff.png', 
    matched: false
  },
  {
    img: './images/dio.png', 
    matched: false
  }
]

function App() {

const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)

const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)

const [disabled, setDisabled] = useState(false)

const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // this compares selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.img === choiceTwo.img) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.img === choiceOne.img) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // responsible for shuffling cards
  const shuffleCards = () => {
    const shuffledCards = [...jojoArr, ...jojoArr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // console.log(cards)

  useEffect(() => {
    shuffleCards()
  }, [])

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
        flipped={card === choiceOne || card === choiceTwo || card.matched}
        disabled={disabled}
        />
      ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
