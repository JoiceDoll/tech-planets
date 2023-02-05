import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Div from "../../components/Div";

import {
  Content,
  SecondContent,
  ThirdContent,
  Carrer,
  ImageMap,
  FourthContent,
  Courses,
  FixedPositionNav,
  StyleButton,
} from "./styles";
import MapImage from "../../images/champion.jpg";
import CapaImage from "../../images/capa.png";

function Home() {
  return (
    <>
      <FixedPositionNav>
        <Navbar bg="dark" variant="dark" id="navId">
          <Container>
            <Navbar.Brand
              href="#home"
              Style={"color:#06f3af; font-weight:bold;"}
            >
              Tech Planet
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Sobre">Sobre</Nav.Link>
              <Nav.Link href="#Cursos">Cursos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </FixedPositionNav>
      <Div id="Home">
        <img src={CapaImage} alt="CapaImage" />
        <Content>
          <span>
            <h1>Hello World!</h1>
          </span>
          <br />
          <p>
            Nós somos a Tech Planet <br /> e sua jornada em tecnologia começa
            aqui.
          </p>
        </Content>
      </Div>
      <SecondContent id="Sobre">
        <p>
          Somos uma plataforma de multiplos ensinamentos em tecnologias, e já
          formamos mais de <span>1.000</span> alunos.
        </p>
      </SecondContent>
      <ThirdContent>
        <Carrer>
          <h1>Mapa de carreiras</h1>
          <p>
            Nós criamos um mapa completo de carreira para você focar nos seus
            objetivos.
          </p>
        </Carrer>
        <ImageMap>
          <img src={MapImage} alt="Map" />
        </ImageMap>
      </ThirdContent>
      <FourthContent id="Cursos">
        <Courses>
          <h1>Nossos cursos</h1>
          <p>Seja Tech</p>
        </Courses>
        <Link to="/cursos">
          <StyleButton>
            <Button
              Style={
                "background:#06f3af; border:inherit; color:#000; font-weight:bold; width:20%; margin-top:15%;margin-left:40%;"
              }
              size="lg"
              active
            >
              Cursos
            </Button>
          </StyleButton>
        </Link>
      </FourthContent>
    </>
  );
}

export default Home;
