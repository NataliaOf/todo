import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill, BsCheck, BsCheckAll} from "react-icons/bs"; 
import { addList, removeList } from "../redax/actions/toDoList";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";


export default function Home(){
   const navigate = useNavigate();
   const location = useLocation();
   const fromPage = location.state?.from?.pathname || '/';
   const state = useSelector(state => state.toDoList);
   const dispatch = useDispatch();
   const [check, setCheck] = useState(false)

   
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

    const check = state.list.filter(item=>item.id === id )
    check[0].check = true; 
   const noChecked = state.list.filter(check=> id !==check.id);

   
  
   
   const newCheck = [...check, ...noChecked]
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
