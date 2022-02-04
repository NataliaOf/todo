import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css"



export default function NavBar(){
   return(
      <>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Navbar.Brand className="m-2" >LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link>
                <Link className="link" to="/">Список задач</Link>
                </Nav.Link>
             <Nav.Link>
                <Link className="link" to="notes">Заметки</Link>
                </Nav.Link>
             {/* <Nav.Link>
                <Link to="about">About</Link>
                </Nav.Link> */}
          </Nav>
          <Nav>
             <Button variant="secondary" className="m-2">Log In</Button>
             <Button variant="secondary" className="m-2">Sign out</Button>
          </Nav>
         </Navbar.Collapse>
      </Navbar>
      </>
   )
}