import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {  Form, Button } from 'react-bootstrap';
import { BsFillTrashFill, BsCheck, BsCheckAll} from "react-icons/bs"; 
import {  useSelector, useDispatch } from 'react-redux'
import { addNote, removeNote } from "../redax/actions/notes";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Notes(){
   console.log(useLocation())

   const [title, setTitle] = useState('');
   const [valueNotes, setValueNotes] = useState('');
   const dispatch = useDispatch();
   const state = useSelector(state => state.note);

   const newDate=   new Date();
    const year =  newDate.getFullYear()
   var month =  newDate.getMonth();
   if( month <10 ) month= `0${month}`
   
   
   var day =  newDate.getDate()
   if(day<10)day = ` 0${day}`

   const  date = `${day}.${month}.${year}`

   // console.log(date)

   useEffect(()=>{
      let notes = JSON.parse(localStorage.getItem('notes'));
     

      if(state.notes.length === 0 && notes !== null){
         notes.forEach(note => {
            dispatch(addNote(note));
         });
      }

   },[])

   function addNoteInBox(){
      const note ={
         id:Math.random().toString(36).substring(2,8),
         title:title,
         note: valueNotes,
         date: date
      };

       dispatch(addNote(note));
       localStorage.setItem('notes', JSON.stringify(state.notes));
       setTitle('');
       setValueNotes('');
    };

function removNoteInBox(id){
   const newState = [];
   for (let index = 0; index < state.notes.length; index++) {
     const element = state.notes[index];
     
     if ( index!==id) {newState.push(element)}
  }
  
  dispatch(removeNote(newState));
  localStorage.removeItem('notes');
  if(newState.length === 0){
      
   localStorage.removeItem('notes')
}
else{localStorage.setItem('notes', JSON.stringify(newState));}
}

   return(
   
      <div className="container">
        <NavBar/>
        <h1>Notes</h1>
        <Row>
           <Col sm={5}>
           <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" 
            placeholder="Title note"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           {/* <Form.Label>Notes</Form.Label> */}
           <Form.Control as="textarea" rows={3}
            placeholder="Your note"
             value={valueNotes}
             onChange={(e)=>setValueNotes(e.target.value)}
           />
         </Form.Group>
         <Button variant="outline-secondary"
          onClick={()=>addNoteInBox()}
          >
        Add note
      </Button>
        </Form>

           </Col>
           <Col sm={7}>
           <div className="notes wraper">

{state.notes.length === 0
? <h3>Заметки не найдены</h3>
:state.notes.map((note, i)=>(
     <div className="note" key={note.id}>
     <h3 className="note__title"> { note.title } <BsFillTrashFill className="button rigt" onClick={()=>{removNoteInBox(i)}} /> </h3>
     <p className="note__date">{note.date}</p>
     <p className="note__text">
      {note.note}
     </p>
   </div>
))}

</div>

           </Col>
        </Row>

       

       
        </div>
      
   )
}