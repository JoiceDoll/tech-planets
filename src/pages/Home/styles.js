import styled from "styled-components";

export const FixedPositionNav = styled.div`
  width: 100%;
  position: fixed;
  z-index: 5;
`;

export const Content = styled.p`
  color: #ffff;
  font-size: 25px;
  text-align: start;
  margin-top: 15%;
  margin-right: 10%;
  font-family: Titillium Web;
`;

export const SecondContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;

  p {
    color: #fff;
    text-align: start;
    margin: 18%;
    font-size: 30px;
    font-family: Titillium Web;
  }
  span {
    color: #06f3af;
  }
`;

export const ThirdContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200%;
  background: #0e0e0e;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
`;
export const Carrer = styled.div`
  /* background:blue; */
  text-align: center;
  font-size: 20px;
  margin-top: 20%;
  font-family: Titillium Web;

  h1 {
    color: #06f3af;
  }
  p {
    color: #fff;
  }
`;
export const ImageMap = styled.div`
  width: 30%;
  height: 60%;
  margin-top: 10%;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    align-items: center;
    opacity: 0.7;
  }
`;

export const FourthContent = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 300%;
`;
export const Courses = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-top: 5%;

  p {
    color: #06f3af;
    font-family: Titillium Web;
  }
`;

export const StyleButton = styled.div`
  margin-top: -10%;
`;
