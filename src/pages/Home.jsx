import React, { useEffect } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill} from "react-icons/bs";
import { addList, removeList } from "../redax/actions/toDoList";

export default function Home(){
   const state = useSelector(state => state.toDoList);
   const dispatch = useDispatch();
   
   useEffect(()=>{
      let tasks= localStorage.getItem('tasks');

     
   
      if(tasks !== null){
         let taskArr = localStorage.getItem('tasks').split(',');
         taskArr.forEach(task => {
          dispatch(addList(task));
          
      })
        
      }

      
     
   },[])


  

 function removList(id){
    const newState = [];
    for (let index = 0; index < state.list.length; index++) {
      const element = state.list[index];
      
      if ( index!==id) {newState.push(element)}
   
      
   }
   dispatch(removeList(newState));
   localStorage.clear()
   if(newState.length == 0){
      
      localStorage.clear()
   }
   else{localStorage.setItem('tasks', newState);}

  
 }


   return(
      <div className="container">
        <NavBar/>
        <h1>HOME</h1>
        <Form/>
        <ul>
           {state.list.length == 0
             ? <h2>Задачи не обнаружены</h2>
            : state.list.map( (task, i) => <li className="task" key={i}>{i+1}. {task} <BsFillTrashFill className="button"  onClick={()=>removList(i)}/></li> )}
       </ul>
       
        
        
      </div>
   )
}
