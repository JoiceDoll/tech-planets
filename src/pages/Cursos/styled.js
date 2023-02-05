import styled from "styled-components";

export const ContainerCourses = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #06f3af;
  width: 80%;
  height: 60%;
  position: absolute;
  margin-top: 5%;
  border-radius: 20px;
  margin-left: 10%;

  #navId {
    display: fixed;
  }
`;
export const DevContent = styled.div`
  margin-top: 8%;
  color: #000;
  text-align: start;
  width: 55%;
`;

export const ImgDeveloper = styled.div`
  width: 40%;
  height: 80%;
  margin: 2%;
  border-radius: 20px;

  img {
    width: 80%;
    height: 100%;
    border-radius: 20px;
    border-radius: 50%;
  }
`;
export const ContainerSecury = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #06f3af;
  width: 80%;
  height: 60vh;
  position: relative;
  margin-top: 40%;
  border-radius: 20px;
  margin-left: 10%;
`;

export const ImgSecury = styled.div`
  width: 30%;
  height: 80%;
  margin: 2%;

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
`;

export const SecuryContent = styled.div`
  color: #000;
  margin-top: 8%;
  width: 50%;
  text-align: start;
`;

export const ContainerDatabase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: #06f3af;
  width: 80%;
  height: 60vh;
  position: relative;
  margin-top: 10%;
  border-radius: 20px;
  margin-left: 10%;
`;

export const ImgData = styled.div`
  width: 30%;
  height: 80%;
  margin: 2%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const DataContent = styled.div`
  margin-top: 8%;
  color: #000;
  width: 50%;
  text-align: start;
`;
