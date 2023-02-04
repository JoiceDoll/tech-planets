import styled from "styled-components";

export const FrontEnd = styled.div`
  margin-top: 8%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
`;

export const FrontImage = styled.div`
  width: 30vw;
  height: 50vh;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const FrontContent = styled.div`
  width: 40vw;
  height: 50vh;

  h1 {
    color: #fff;
  }

  span {
    color: #42d3ff;
  }
`;

export const Icon = styled.span`
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  height: 60%;
`;

export const BackEnd = styled.div`
  margin-top: 20%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  position: relative;
  top: 0;
  width: 100%;
  height: 50%;
`;

export const BackImage = styled.div`
  width: 30vw;
  height: 50vh;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const BackContent = styled.div`
  width: 40vw;
  height: 50vh;

  h1 {
    color: #fff;
  }

  span {
    color: #42d3ff;
  }
`;
export const BackIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  height: 60%;
`;
