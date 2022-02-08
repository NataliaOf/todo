import React from "react";
import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import {  useSelector, useDispatch } from 'react-redux'
import { addList } from "../redax/actions/toDoList";


export default function Form(){

   const dispatch = useDispatch();
   // const state = useSelector(state => state.viewModal);

   const [value, setValue] = useState('');
   const state = useSelector(state => state.toDoList);


   function addTask(value){
     const task ={
        id:Math.random().toString(36).substring(2,9),
        task: value,
        check: false
     }
      dispatch(addList(task));
     let taskJ = JSON.stringify(state.list);
      console.log(taskJ)
      localStorage.setItem('tasks', taskJ);
      setValue('');
   }
   return(
      <>
  

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={() =>addTask(value)}>
      Button
    </Button>
  </InputGroup>

  
</>
   )
}