import React from "react";
import { Navbar, Container } from "react-bootstrap";
import ImageSecurity from "../../images/hackman.jpg";
import { Link } from "react-router-dom";
import {
  Security,
  SecurityImage,
  SecurityContent,
  SecurityIcons,
  SecuryIcon
} from "./styled";
import { SiVirtualbox, SiWireshark, SiKalilinux } from "react-icons/si";
import { GiHydra } from "react-icons/gi";

function SecurityPage() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link Style={"text-decoration:none"} to="/">
            <Navbar.Brand
              href="#home"
              Style={"color:#06f3af; font-weight:bold"}
            >
              Tech Planets
            </Navbar.Brand>
          </Link>
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
            <SecuryIcon>
              {" "}
              <SiVirtualbox size={70} />
            </SecuryIcon>
            <SecuryIcon>
              {" "}
              <SiWireshark size={70} />
            </SecuryIcon>
            <SecuryIcon>
              {" "}
              <GiHydra size={70} />
            </SecuryIcon>
            <SecuryIcon>
              {" "}
              <SiKalilinux size={70} />
            </SecuryIcon>
          </SecurityIcons>
        </SecurityContent>
      </Security>
    </>
  );
}

export default SecurityPage;
