import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Database, DatabaseImage, DatabaseContent, DatabaseIcons } from "./styled";
import DatabaseRoute from "../../images/databaseRoute.jpg";
import {SiMysql, SiOracle, SiLaravel, SiMongodb, SiSequelize} from "react-icons/si"

function DatabasePage(){
    return(
        <>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" Style={"color:#06f3af; font-weight:bold"}>Tech Planets</Navbar.Brand>
        </Container>
      </Navbar>


      <Database>
        <DatabaseImage>
          <img src={DatabaseRoute} alt="DatabaseRoute" />
        </DatabaseImage>
        <DatabaseContent>
          <h1>
            <span>Banco de dados</span> 
          </h1>
          <DatabaseIcons>
          <SiMysql size={70}/>
          <SiOracle size={70}/>
          <SiLaravel size={70}/>
          <SiMongodb size={70}/>
          <SiSequelize size={70}/>
          </DatabaseIcons>
        </DatabaseContent>
      </Database>


        </>
    )
}

export default DatabasePage;