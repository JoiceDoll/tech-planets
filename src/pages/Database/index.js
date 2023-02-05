import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  Database,
  DatabaseImage,
  DatabaseContent,
  DatabaseIcons,
  DataIcon
} from "./styled";
import { Link } from "react-router-dom";
import DatabaseRoute from "../../images/databaseRoute.jpg";
import {
  SiMysql,
  SiOracle,
  SiLaravel,
  SiMongodb,
  SiSequelize,
} from "react-icons/si";

function DatabasePage() {
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

      <Database>
        <DatabaseImage>
          <img src={DatabaseRoute} alt="DatabaseRoute" />
        </DatabaseImage>
        <DatabaseContent>
          <h1>
          <span>Banco</span> de dados
          </h1>
          <DatabaseIcons>
            <DataIcon>
              {" "}
              <SiMysql size={70} />
            </DataIcon>
            <DataIcon>
              <SiOracle size={70} />
            </DataIcon>
            <DataIcon>
              {" "}
              <SiLaravel size={70} />
            </DataIcon>
            <DataIcon>
              {" "}
              <SiMongodb size={70} />
            </DataIcon>
            <DataIcon>
              {" "}
              <SiSequelize size={70} />
            </DataIcon>
          </DatabaseIcons>
        </DatabaseContent>
      </Database>
    </>
  );
}

export default DatabasePage;
