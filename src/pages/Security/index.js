import React from "react";

import { Navbar, Container } from "react-bootstrap";
import ImageSecurity from "../../images/hackman.jpg";

import {
  Security,
  SecurityImage,
  SecurityContent,
  SecurityIcons,
} from "./styled";
import { SiVirtualbox, SiWireshark, SiKalilinux } from "react-icons/si";
import { GiHydra } from "react-icons/gi";

function SecurityPage() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" Style={"color:#06f3af; font-weight:bold"}>
            Tech Planets
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Security>
        <SecurityImage>
          <img src={ImageSecurity} alt="ImageSecurity" />
        </SecurityImage>
        <SecurityContent>
          <h1>
            <span>Segurança da informação</span> Hacker Ético
          </h1>
          <SecurityIcons>
            <SiVirtualbox size={70} />
            <SiWireshark size={70} />
            <GiHydra size={70} />
            <SiKalilinux size={70} />
          </SecurityIcons>
        </SecurityContent>
      </Security>
    </>
  );
}

export default SecurityPage;
