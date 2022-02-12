import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill, BsCheck, BsCheckAll} from "react-icons/bs"; 
import { addList, removeList } from "../redax/actions/toDoList";

export default function Home(){
   const state = useSelector(state => state.toDoList);
   const dispatch = useDispatch();
   const [check, setCheck] = useState(false)
   // console.log( state.list)
   
   useEffect(()=>{
      let tasksJson= localStorage.getItem('tasks');
     let tasks = JSON.parse( tasksJson );

      if(state.list.length === 0 ){
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
   //  console.log(id)
   //  dispatch(checkList(id))

  
 }
 console.log(state)


   return(
      <div className="container">
        <NavBar/>
        <h1>Task list</h1>
        <Form/>
        <ul>
           {state.list.length === 0
             ? <h2 className="wraper">Задачи не обнаружены</h2>
            : state.list.map( (task, i) => <li className="task" key={task.id} onClick={()=>checkList(task.id) }>
               {check 
               ? <BsCheckAll/>
               : <BsCheck className="button" />}
                {i+1}. {task.task}  <BsFillTrashFill className="button rigt"  onClick={()=>removList(task.id)}/></li> )}
       </ul>
       
        
        
      </div>
   )
}
