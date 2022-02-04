import React from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import "../App.css"

export default function Home(){

   return(
      <div className="container">
        <NavBar/>
        <h1>HOME</h1>
        <Form/>
      </div>
   )
}