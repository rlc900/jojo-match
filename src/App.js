// import ReactCardFlip from 'react-card-flip';
// import styled from 'styled-components'
import './App.css';
// import React, { useState } from 'react';
import Card from './Components/Card';
// import Front from './Components/Front';

function App() {
  // const logo = './images/jojo.png';

  return (
    <div>
      <Card/>
      </div>
  );
}

export default App;

// const FrontCard = styled.div`
//   height: 100px;
// `

// const BackCard = styled.div`
// height: 100px;
// `

// const Character = styled.img`
// height: 100px;
// width: 100px;
// `

// const Logo = styled.img`
// height: 100px;
// width: 100px;
// `

 // <div>
    //   {jojoArr.map((jojo) => {
    //     return <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" key={jojo.id}>
    //     <FrontCard onClick={handleClick}>
    //       <Logo src='./images/jojo.png' alt='logo'/>
    //     </FrontCard>
    //     <BackCard onClick={handleClick}>
    //       <Character src={jojo.img} alt='Jojo'/>
    //     </BackCard>
    //     </ReactCardFlip>
    //   })}
    //     </div>