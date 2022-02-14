import NavBar from "../components/NavBar"
import { Button,  Form, Row, Col } from "react-bootstrap";
import logo from "../logo.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addUser, authUser } from "../redax/actions/authorization";
// import RequireAuth from "../hoc/RequireAuth";

export default function TitlePage(){
   const [usName, setUsName] = useState('');
   const [usPass, setUsPass] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const {user} =useSelector(state=>state.authorization);
   const dispatch = useDispatch();
  
   const userLogin = JSON.parse ( localStorage.getItem("login"));
   const fromPage = location.state?.from?.pathname || '/';
   console.log(userLogin)
   console.log(user)
  
    function checkUser(e,usName,usPass, userLogin){
       e.preventDefault()
       console.log(usName, usPass)
       console.log(user)
       if(userLogin === null) return
       if( userLogin.fName===usName && userLogin.password === usPass ){ 
          console.log("user")
         dispatch(addUser(userLogin));
         setUsName('');
         setUsPass('');
         dispatch(authUser(true))
         navigate(fromPage, {replace:true})
         } else console.log("nouser")
    }

  function showClick(){
     console.log('click')
  }  

   return(
     <div className="container">
     <NavBar />
       <h2>Вы не вошли в свой аккаунт</h2>
       {fromPage}
       <Row>
      
          <Col sm={4}>
             <Row>
                <Col sm={6}>
                <h4>To come in ...or</h4>
                </Col>
                <Col sm={6}>
                <h4>register</h4>
                 <Button variant="secondary" className="m-2" onClick={showClick}>Log In</Button>
                </Col>
             </Row>
         
       <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="text" placeholder="Your name"
             value={usName}
             onChange={(e)=>setUsName(e.target.value)}
           />
           <Form.Text className="text-muted">
            
           </Form.Text>
         </Form.Group>
       
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password"
              value={usPass}
              onChange={(e)=>setUsPass(e.target.value)}
           />
         </Form.Group>
        
         <Button variant="secondary" 
         onClick={(e)=>checkUser(e,usName,usPass,userLogin)}
         type="submit"
         >
           Submit
         </Button>
       </Form>

       

          </Col>
          <Col sm={8}>
             <img src={logo} alt="logo"/>
          </Col>
         
       </Row>

      

      
     </div>

   )
}