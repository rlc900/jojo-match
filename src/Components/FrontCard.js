import styled from 'styled-components'
// import Jotaro from '../'

function FrontCard() {
    return (
      <div className="Card">
          <CardContainer>
          <InnerCardContainer>
          <Card>
          Front
          </Card>
          </InnerCardContainer>
          </CardContainer>
      </div>
    );
  }
  
  export default FrontCard;

  const InnerCardContainer = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const CardContainer = styled.div`
background-color: transparent;
width: 300px;
height: 200px;
border: 1px solid #f1f1f1;
perspective: 1000px; /* Remove this if you don't want the 3D effect */
`

const Card = styled.div`
background-color: #bbb;
  color: black;

  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`
