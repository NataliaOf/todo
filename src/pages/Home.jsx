import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill, BsCheck, BsCheckAll} from "react-icons/bs"; 
import { addList, removeList } from "../redax/actions/toDoList";
import { Col, Row } from "react-bootstrap";


export default function Home(){
   const state = useSelector(state => state.toDoList);
   const dispatch = useDispatch();
   const [check, setCheck] = useState(false)
   console.log( state.list)
   
   useEffect(()=>{
      let tasksJson= localStorage.getItem('tasks');
     let tasks = JSON.parse ( tasksJson );

      if(state.list.length === 0 && tasks !== null){
        tasks.forEach(task => {
          dispatch(addList(task));
       })
      
      }
  },[])

 function removList(id){
  
   const newState= state.list.filter(todo => todo.id !== id )
 
   dispatch(removeList(newState));
   localStorage.removeItem('tasks')
   if(newState.length === 0){
      
      localStorage.removeItem('tasks')
   }
   else{localStorage.setItem('tasks', JSON.stringify(newState));}

  
 }
 function checkList(id){
   console.log(id)
   const checkedG = state.list.filter(check=> id ===check.id);
   console.log(checkedG)
   checkedG[0].check = true; 
   const noChecked = state.list.filter(check=> id !==check.id);
   console.log(checkedG)
   console.log( noChecked)
   const newCheck = [...checkedG, ...noChecked]
   console.log(newCheck)
   dispatch(checkList(newCheck))
   localStorage.setItem('tasks', JSON.stringify(newCheck));
  
 

 
}




   return(
      <div className="container">
        
        <NavBar/>
        <h1>Task list</h1>
        <Row>
           <Col sm={5}>
           <Form/>
           </Col>
           <Col sm={7}>
           <ul>
           {state.list.length === 0
             ? <h2 className="wraper">Задачи не обнаружены</h2>
            : state.list.map( (task, i) => <li className="task" key={task.id} onClick={()=>checkList(task.id) }>
               {task.check
               ? <BsCheckAll/>
               : <BsCheck className="button" />}
                {i+1}. {task.task}  <BsFillTrashFill className="button rigt"  onClick={()=>removList(task.id)}/></li> )}
           </ul>

           </Col>
        </Row>
       
        
       
        
        
      </div>
   )
}
