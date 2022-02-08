import React, { useState } from "react";
import NavBar from "../components/NavBar";
import {  Form, Button } from 'react-bootstrap';

export default function Notes(){

   const [title, setTitle] = useState('');
   const [valueNotes, setValueNotes] = useState('');

   return(
   
      <div className="container">
        <NavBar/>
        <h1>Заметки</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title notes</Form.Label>
            <Form.Control type="text" 
            placeholder="Title notes"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Notes</Form.Label>
           <Form.Control as="textarea" rows={3}
             value={valueNotes}
             onChange={(e)=>setValueNotes(e.target.value)}
           />
         </Form.Group>
         <Button variant="outline-secondary" type="submit">
        Submit
      </Button>
        </Form>
        </div>
      
   )
}