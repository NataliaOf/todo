import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function RequireAuth({children}) {
   const state =useSelector(state=>state.authorization);
   const location = useLocation();

   if( state.authUser === false){
      return <Navigate to='/autorization' state={{from: location}}/>
   }

  

   return children;
}