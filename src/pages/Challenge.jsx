import NavBar from "../components/NavBar";
import { Form, Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

export default function Challenge(){
   const [days, setDays] = useState(0);
   const [chalenge, setChalenge] = useState('')
   let arrDays= [];
   for (let index = 0; index < days; index++) {
      arrDays[index] = index + 1;
      
   }
console.log(arrDays.length)
   return(
   
        <div className="container">
        <NavBar/>
       <h2>Challenge</h2>

       <Container>
          <Row>
            <Col sm={2}>
              {/* <Form.Label htmlFor="inputPassword5">How many days</Form.Label> */}
               <Form.Control 
                 type="number" 
                 value={days}
                 onChange={(e)=>setDays(e.target.value)}
               />
               
            </Col>
            <Col sm={4}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control
                 as="textarea"
                 placeholder="Text"
                 value={chalenge}
                 onChange={(e)=> setChalenge(e.target.value)}
                  />
               </Form.Group>
               <Row>
                  <Col sm={12}>
                     <div className="wraper">
                        text
                     </div>
                  </Col>
               </Row>
            </Col>
            <Col sm={2}>
               <Button variant="outline-secondary">
                    Start
               </Button>
            </Col>
            
             <Col sm={4}>
               <Row>
                  <Col sm={12}>
                     <h4>Days</h4>
                  </Col>
               </Row>
               <Row>
                  <Col sm={12}>
                 <div className="wraper-flex wraper">
                 {arrDays.length ===0
                   ? <h3>Start the test</h3>
                   :arrDays.map(day=>(
                    <div key={day} className="day">
                       <Form.Check  
                      inline
                      label={day}
                      name="group1"
                      aria-label="option {day"
       
                    />

                    </div>
                      

                 ))}
                 </div>

                 

                
            

                  </Col>
               </Row>
             

             </Col>
          </Row>

       </Container>

</div>
      
   )
}



