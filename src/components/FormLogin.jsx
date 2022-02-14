import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {  useDispatch } from 'react-redux';
import { addUser,authUser } from "../redax/actions/authorization";
import { useNavigate } from "react-router-dom"


function FormLogin({setShow}){
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const { 
      register,
       handleSubmit, 
       watch, 
       reset,
       formState: { errors, isValid } } = useForm({
        mode:"onBlur"
       });
  
  
  const onSubmit = (data) =>{
   //  alert(JSON.stringify(data))
    console.log(data)
    console.log(JSON.stringify(data))
    dispatch(addUser(data))
    reset()
    setShow(false)
    localStorage.setItem("login",JSON.stringify(data))
    dispatch(authUser(true))
    navigate('../', { replace: true })
  }
//   https://react-hook-form.com/get-started
   return(
      <Form onSubmit={handleSubmit(onSubmit)} >
         <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name*</Form.Label>
        <Form.Control type="text" placeholder="Your name" 
       {...register("fName", { 
          required: "The field is required",
          minLength: {
              value:5,
              message: "Minimum 5 letters"
             }

         })}
        />
        
        <Form.Text className="text-muted">
        {errors?.fName && <span  className="error">{errors?.fName?.message || 'Error!'}</span>}
       
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        {...register("email", {
         required: "The field is required",
          pattern: {
            value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
            message:"Email is not valid",
            }
        })}
        />
        <Form.Text className="text-muted">
        {errors?.email && <span  className="error">{errors?.email?.message || 'Error!'}</span>}
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         {...register("password", {
            required: "The field is required",
             pattern: {
               value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
               message:" The password must contain 6-20 characters, 1 capital letter and 1 capital letter",
               }
           })}
        />

       <Form.Text className="text-muted">
        {errors?.password && <span className="error">{errors?.password?.message || 'Error!'}</span>}
        </Form.Text>
      </Form.Group>

     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
        <Form.Check type="checkbox" label="Check me out"
        {...register('checkbox', {required: "The field is required"})}
         />
          <Form.Text className="text-muted">
        {errors?.checkboxd && <span  className="error">{errors?.checkbox?.message || 'Error!'}</span>}
        </Form.Text>
      </Form.Group>
     
      <Button variant="outline-secondary" type="submit" disabled={!isValid}>
        Submit
      </Button>
    </Form>
   )
}



 export default FormLogin;
 
