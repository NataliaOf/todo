import React, { useEffect } from "react";
import { Button, Nav, Navbar,Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css"
import { BsCardChecklist, BsCardText, BsCheck2Square, BsCalendar3} from "react-icons/bs"; 
import { useState } from 'react';
import FormLogin from "./FormLogin";
import {  useSelector, useDispatch } from 'react-redux';
import logo from "../logo.png";
import { remoweUser } from "../redax/actions/authorization";
import { useNavigate } from "react-router-dom"




export default function NavBar(){
   const navigate = useNavigate();
   const [show, setShow] = useState(false);
   const {user} =useSelector(state=>state.authorization);
   const dispatch = useDispatch()
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   const userRemove= () =>{
   // console.log(user.fName, user.password) 
   const newUsers = {
      checkbox: true,
      email: "",
      fName: "",
      password: ""
   } ;
   dispatch(remoweUser(newUsers)) 
   navigate('/autorization', { replace: true })
   }

  

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
           <FormLogin setShow={setShow}/>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      
        <Navbar.Brand className="m-2" >
           {user.fName === ''
            ? <img src={logo} alt="logo" className="logo"/>
            : user.fName
           }
        </Navbar.Brand>
        <Navbar.Toggle className="m-3" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link >
                <Link className="link" to="/"><BsCardChecklist /></Link>
             </Nav.Link>
             <Nav.Link>
                <Link className="link" to="/notes"><BsCardText/></Link>
             </Nav.Link>
             <Nav.Link>
                <Link className="link" to="/challenge"><BsCheck2Square/></Link>
             </Nav.Link>
             <Nav.Link>
                <Link className="link" to="/calendar"><BsCalendar3/></Link>
             </Nav.Link>
             {/* <Nav.Link>
                <Link className="link" to="/autorization">OPEN </Link>
             </Nav.Link> */}
             
          </Nav>
          <Nav>
             {user.fName === ''
               ?<Button variant="secondary" className="m-2" onClick={handleShow}>Log In</Button>
               :<Button variant="secondary" className="m-2" onClick={userRemove}>Sign out</Button>
             }
             
             
          </Nav>
         </Navbar.Collapse>
      </Navbar>
      </>
   )
}