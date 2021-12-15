import React, {useState} from 'react';
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip';


function Card() {

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
        return (
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" key={jojo.id}>
          <CardContainer onClick={handleClick}>
          
          <Character src={jojo.img} alt='Jojo'/>
       
          </CardContainer>
      </ReactCardFlip>
        )
        
      })}
      </div>
    );
  }
  
  export default Card;

  const Character = styled.img`
  height: 100px;
  width: 100px;
  `
  

//   const InnerCardContainer = styled.div`
// position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 0.8s;
//   transform-style: preserve-3d;
// `

const CardContainer = styled.div`
height: 100px;
`

// const Card = styled.div`
// background-color: #bbb;
//   color: black;

//   position: absolute;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden; /* Safari */
//   backface-visibility: hidden;
// `