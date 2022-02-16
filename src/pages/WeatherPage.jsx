import { useEffect, useState } from "react"
import NavBar from "../components/NavBar";
import { Row, Col,Table,Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsFillBrightnessHighFill } from "react-icons/bs";



export default function WeatherPage(){
   const [data, setData] = useState(null);
   const [sity, setSity] = useState('Kiev');
   const [error, setError] = useState(false);
   
   const { 
      register,
       handleSubmit, 
       reset,
       formState: { errors, isValid } } = useForm({
        mode:"onBlur"
       });

       const onSubmit = (data) =>{
         reset()
          setSity(data.sity)
        
        }


   useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=d698a05430eaa4f873e0eb03f09e5e3e&lang=ru`)
    .then(response=> response.json()
    .then(setData ))
    .catch( setError(true) )
    if(error ) setSity('Kiev')


   },[sity])



   return(

      <div className="container">
         <NavBar/>
      <h2>Weather</h2>
      <Row>
        <Col sm={3}>
        <Form onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3">
        <Form.Label><h3>Choose city</h3></Form.Label>
        <Form.Control type="text"
         placeholder="Select city" 
         {...register("sity", { 
            required: "The field is required"})}
        
         />
          <Form.Text className="text-muted">
        {errors?.sity && <span  className="error">{errors?.sity?.message || 'Error!'}</span>}
       
        </Form.Text>
        </Form.Group>
        <Button variant="outline-secondary" type="submit" disabled={!isValid}>
             Submit
        </Button>
        </Form >
        </Col>

        <Col sm={9}>
      {(data === null || data.cod==='404')
      ? <h3>City not selected</h3>
      
      :  <Table striped bordered hover>
  <thead>
    <tr>
      
      <th colSpan={2}>Temperature</th>
      <th colSpan={2}>Params</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>Now:</td>
      <td>{ Math.round((data.main.temp) -273)} &deg;</td>
      <td>Sity:</td>
      <td>{data.name}</td>
    
    </tr>
    <tr>
       <td> feels like:</td>
      <td> { Math.round((data.main.feels_like) -273) } &deg;</td>
      <td> {data.weather[0].icon}</td>
      <td>{data.weather[0].main}</td>
     
    </tr>
    <tr>
       <td> max: {  Math.round((data.main.temp_max) -273) } &deg;</td>
      <td> min: {  Math.round((data.main.temp_min) -273) } &deg;</td>
    <td>Wind speed:</td>
      <td> {data.wind.speed} m/s</td>
    </tr>
  </tbody>
</Table>
}
        </Col>
      </Row>
      </div>
   )
}