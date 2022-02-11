import { useState } from "react";
import NavBar from "../components/NavBar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button, ListGroup} from "react-bootstrap";

export default function CalendarPage(){
 const [calendarValue, setCalendarValue] = useState(new Date());
 const [data, setData] = useState('');
 const [events, setEvents] = useState('')
function viewDay(value, event){
  
   setData(event.target.ariaLabel)

}

   return(
   
        <div className="container">
        <NavBar/>
       <h2>Calendar</h2>

      
       <Row>
       <Col sm={5}>
          <Row>
             <Col sm={12}>
                <div className="calendar">
                <Calendar
                 onChange={setCalendarValue}
                 value={calendarValue}
                 onClickDay={(value, event) => viewDay(value, event)}
      
          />
                </div>
             
             </Col>
          </Row>
          <Row>
             <Col sm={12}>
             <Form.Control
             className="mt-3"
                 as="textarea"
                 placeholder="Text"
                 value={events}
                 onChange={(e)=> setEvents(e.target.value)}
                  />
               <Button 
                 variant="outline-secondary"
                className="mt-3 btn">
                  Send
               </Button>   
                
             </Col>

          </Row>

       </Col>
       <Col sm={7}>
          <Row>
             <Col sm={12}>
             <ListGroup className="mb-3 btn-hover ">
               <ListGroup.Item variant="success">
               {data 
                 ? data
                 : 'Дата не обнаружена'}
               </ListGroup.Item>
              </ListGroup>

             </Col>
          </Row>
          <Row>
             <Col sm={12}>
             <div className="wraper">
          
            <div>
          События не обнаружены
       </div>
       </div>
                
             </Col>
          </Row>
      

       </Col>

      </Row>
       

      
       
       </div>
      
   )
}