import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button, ListGroup,Accordion} from "react-bootstrap";
import { addDate, removeDate } from "../redax/actions/calendar";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";

export default function CalendarPage(){
 const [calendarValue, setCalendarValue] = useState(new Date());
 const [data, setData] = useState('');
 const [events, setEvents] = useState('');
 const dispatch = useDispatch();
 const {calendar} = useSelector(state=> state.calendar)


function viewDay(value, event){
  
   setData(event.target.ariaLabel);
}

function addCalendarEvent(events, data){
  
      const eventObj ={
         eventer: events,
         date: data,
         id:Math.random().toString(36).substring(2,10),
        
      } 
      dispatch(addDate(eventObj))
      setEvents('');
      setData('');

       localStorage.setItem('events', JSON.stringify(calendar));
   }

   // localStorage.setItem('events', JSON.stringify(calendar));

   function removeEvents(id){
      // let tasksJson= localStorage.getItem('tasks');
      // JSON.parse(localStorage.getItem('events'))
      localStorage.removeItem('events')
      const newEventArr = calendar.filter(even => even.id !== id)
      dispatch(removeDate(newEventArr))
      localStorage.setItem('events', JSON.stringify(newEventArr));
   }


   useEffect(()=> {
     let eventObj = JSON.parse(localStorage.getItem('events'))

     if(calendar.length === 0 && eventObj!== null){
      eventObj.map(eventDate=> dispatch(addDate(eventDate)) )
     }

     
      
     

   }, [])


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
                className="mt-3 btn"
                onClick={()=>addCalendarEvent(events, data)}
                >
                  
                  Send
               </Button>   
                
             </Col>

          </Row>

       </Col>
       <Col sm={7}>
         
          <Row>
             <Col sm={12}>
             {calendar.length !==0
             ?calendar.map((data, i) => <Accordion key={data.id}>
             <Accordion.Item eventKey={i}>
               <Accordion.Header> <BsFillTrashFill className="button" onClick={()=>removeEvents(data.id)} /> { data.date }</Accordion.Header>
               <Accordion.Body>
               { data.eventer }
               </Accordion.Body>
             </Accordion.Item>
             </Accordion>)
              :  <h3>События не обнаружены</h3>
            }
             
             </Col>
          </Row>
         
      

       </Col>

      </Row>
       

      
       
       </div>
      
   )
}