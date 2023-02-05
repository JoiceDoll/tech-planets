import styled from "styled-components";

const Div = styled.div`
  background: #1a2b3d;
  width: 100%;
  height: 100vh;
  position: absolute;
  display:flex;
  flex-direction: row;
  justify-content: space-around;

  img{
    width:50%;
    height:100%;
    opacity:0.5;
  }
  
  span {
    color: #06f3af;
    font-weight: bold;
  }
`;

export default Div;
