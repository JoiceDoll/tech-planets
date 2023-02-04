import styled from "styled-components";

// import { Navbar } from "react-bootstrap";

export const Security = styled.div`
  margin-top: 8%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
`;

export const SecurityImage = styled.div`
  width: 30vw;
  height: 60vh;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const SecurityContent = styled.div`
  width: 40vw;
  height: 50vh;

  h1 {
    color: #fff;
  }

  span {
    color: #42d3ff;
  }
`;

export const SecurityIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  height: 60%;
`;

// export const CustomNavbar = styled(Navbar)`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   height: 60%;
// `;
