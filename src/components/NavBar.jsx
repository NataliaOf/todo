import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css"
import {  Modal } from 'react-bootstrap';
import { useState } from 'react';
import FormLogin from "./FormLogin";


export default function NavBar(){
   const [show, setShow] = useState(false);
   const[login, setLogin] = useState(true)

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return(
      <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <FormLogin/>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

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
             {login
               ?<Button variant="secondary" className="m-2" onClick={handleShow}>Log In</Button>
               :<Button variant="secondary" className="m-2">Sign out</Button>
             }
             
             
          </Nav>
         </Navbar.Collapse>
      </Navbar>
      </>
   )
}