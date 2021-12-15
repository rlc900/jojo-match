import styled from 'styled-components'
// import Jotaro from '../'

function FrontCard({logo, onClick}) {
  // console.log(jojo)
    return (
      <div className="FrontCard">
          <CardContainer onClick={onClick}>
          
          <Logo src={logo} alt='Jojo Logo'/>
       
          </CardContainer>
      </div>
    );
  }
  
  export default FrontCard;

  const Logo = styled.img`
height: 100px;
width: 100px;
`

//   const InnerCardContainer = styled.div`
//   position: relative;
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
