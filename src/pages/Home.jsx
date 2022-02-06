import React, { useEffect } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill} from "react-icons/bs";
import { addList } from "../redax/actions/toDoList";

export default function Home(){
   const state = useSelector(state => state.toDoList);
   console.log(state.list)
   const dispatch = useDispatch();
   // useEffect(()=>{
   //  const tasks= localStorage.getItem('tasks');
   //  if(tasks!== '') tasks.split(',');
   //  dispatch(addList(tasks));
   
     
   // },[])
   let tasks= localStorage.getItem('tasks');
   console.log(tasks)
   // console.log(tasks.includes(','))
   if(tasks === null){
       var list = []
   }else{
      list = localStorage.getItem('tasks').split(',')
   }
   

   console.log(list)
   // list =['sss', 'fff']

 function removList(id){
    console.log(id, state.list)

 }


   return(
      <div className="container">
        <NavBar/>
        <h1>HOME</h1>
        <Form/>
        <ul>
           {list === []
             ? <h2>Задачи не обнаружены</h2>
            : list.map( (task, i) => <li className="task" key={i}>{i+1}. {task} <BsFillTrashFill className="button"  onClick={()=>removList(i)}/></li> )}
       </ul>
       
        
        
      </div>
   )
}


// state.list.map( (task, i) => <li className="task" key={i}>{i+1}. {task} <BsFillTrashFill className="button" onClick={()=>console.log(i)} /></li> )