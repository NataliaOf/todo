import NavBar from "../components/NavBar"
import { Button,  Form, Row, Col,Carousel } from "react-bootstrap";
import logo from "../logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import { addUser, authUser } from "../redax/actions/authorization";
import { useForm } from "react-hook-form";

export default function TitlePage(){
 
   const navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();
   const { 
      register,
       handleSubmit,
       reset,
       formState: { errors } } = useForm({
        mode:"onBlur"
       });
  
   const userLogin = JSON.parse ( localStorage.getItem("login"));
   const fromPage = location.state?.from?.pathname || '/';
  

    const onSubmit = (data) =>{
  

       if(userLogin === null) return
       if( userLogin.fName===data.firstName && userLogin.password === data.yourPass){ 
      
         dispatch(addUser(userLogin));
         reset()
         dispatch(authUser(true))
         navigate(fromPage, {replace:true})
     }
   }

  function showClick(){
     console.log('click')
  }  

   return(
     <div className="container">
     <NavBar />
       <h2>You are not logged into your account</h2>
      
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
         
       <Form onSubmit={handleSubmit(onSubmit)} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="text" placeholder="Your name"
             {...register("firstName", { required:"The field is required" })}
           />
           <Form.Text className="text-muted">
           {errors?.firstName && <span  className="error">{errors?.firstName?.message || 'Error!'}</span>}
           </Form.Text>
         </Form.Group>
       
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password"
              {...register("yourPass", { required:"The field is required" })}
           />
            <Form.Text className="text-muted">
           {errors?.yourPass && <span  className="error">{errors?.yourPass?.message || 'Error!'}</span>}
           </Form.Text>
         </Form.Group>
        
         <Button variant="secondary" 
         type="submit"
         >
           Submit
         </Button>
       </Form>

       

          </Col>
          <Col sm={8}>
             {/* <img src={logo} alt="logo"/> */}

             <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="clide__text">With our glider...</h3>
      <p className="clide__text">you can organize your affairs</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={logo}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="clide__text">With our glider...</h3>
      <p className="clide__text">make a challenge for yourself</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="clide__text">Start right now</h3>
      <p className="clide__text">and make your life more productive.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </Col>
         
       </Row>

      

      
     </div>

   )
}