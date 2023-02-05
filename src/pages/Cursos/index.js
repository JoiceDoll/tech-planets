import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  ContainerCourses,
  ImgDeveloper,
  DevContent,
  ContainerSecury,
  ImgSecury,
  SecuryContent,
  ContainerDatabase,
  ImgData,
  DataContent,
} from "./styled";
import DevImg from "../../images/dev.jpg";
import SecurityImg from "../../images/hack.jpg";
import DataBaseImg from "../../images/database.jpg";

function Cursos() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link Style={"text-decoration:none"} to="/">
            <Navbar.Brand
              href="#home"
              Style={"color:#06f3af; font-weight:bold; "}
            >
              Tech Planets
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <ContainerCourses>
        <ImgDeveloper>
          <img src={DevImg} alt="DevImg" />
        </ImgDeveloper>
        <DevContent>
          <h1>Desenvolvimento Web</h1>
          <p>
            Domine as principais linguagens Back-end e Front-end do mercado.
          </p>
          <Link to="/developer">
            <Button variant="secondary" size="lg" active>
              Mais informações
            </Button>
          </Link>
        </DevContent>
      </ContainerCourses>
      <ContainerSecury>
        <ImgSecury>
          <img src={SecurityImg} alt="SecurityImg" />
        </ImgSecury>
        <SecuryContent>
          <h1>Segurança da informação</h1>
          <p>Aprenda as principais técnicas de um Hacker Ético.</p>
          <Link to="/security">
            <Button variant="secondary" size="lg" active>
              Mais informações
            </Button>
          </Link>
        </SecuryContent>
      </ContainerSecury>
      <ContainerDatabase>
        <ImgData>
          <img src={DataBaseImg} alt="DataBaseImg" />
        </ImgData>
        <DataContent>
          <h1>Banco de dados</h1>
          <p>
            Tudo o que você precisa para se tornar um profissional em banco de
            dados.
          </p>
          <Link to="/database">
            <Button variant="secondary" size="lg" active>
              Mais informações
            </Button>
          </Link>
        </DataContent>
      </ContainerDatabase>
    </>
  );
}

export default Cursos;
