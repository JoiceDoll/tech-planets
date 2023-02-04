import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";

import { DiJavascript1, DiRuby } from "react-icons/di";
import {
  FrontEnd,
  FrontImage,
  FrontContent,
  Icons,
  BackEnd,
  BackImage,
  BackContent,
  BackIcons,
  Icon,
} from "./styled";

import ImageFront from "../../images/front.jpg";
import ImageBack from "../../images/back.jpg";
function ImgDeveloper() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" Style={"color:#06f3af; font-weight:bold"}>
            Tech Planets
          </Navbar.Brand>
        </Container>
      </Navbar>
      <FrontEnd>
        <FrontImage>
          <img src={ImageFront} alt="ImageFront" />
        </FrontImage>
        <FrontContent>
          <h1>
            <span>Front-End</span> Developer
          </h1>
          <Icons>
            <Icon>
              <FaReact size={70} />
            </Icon>
            <Icon>
              <FaAngular size={70} />
            </Icon>
            <Icon>
              {" "}
              <FaHtml5 size={70} />
            </Icon>
            <Icon>
              {" "}
              <FaCss3Alt size={70} />
            </Icon>
            <Icon>
              <FaBootstrap size={70} />
            </Icon>
            <Icon>
              {" "}
              <FaVuejs size={70} />
            </Icon>
          </Icons>
        </FrontContent>
      </FrontEnd>
      <BackEnd>
        <BackImage>
          <img src={ImageBack} alt="ImageBack" />
        </BackImage>

        <BackContent>
          <h1>
            <span>Back-End</span> Developer
          </h1>
          <BackIcons>
            <FaNodeJs size={70} />
            <FaPhp size={70} />
            <FaJava size={70} />
            <FaPython size={70} />
            <DiJavascript1 size={70} />
            <DiRuby size={70} />
          </BackIcons>
        </BackContent>
      </BackEnd>
    </>
  );
}

export default ImgDeveloper;
