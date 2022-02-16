import NavBar from "../components/NavBar";
import { Form, Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { addChallenge, chackedToggle, removeChallenge } from "../redax/actions/challenge";
import { useSelector,useDispatch } from "react-redux";

export default function Challenge(){
   const [days, setDays] = useState(0);
   const [chalenge, setChalenge] = useState('');
   const [flag, setFlag] = useState(true)
   const [checed, setCheced] = useState([])
   const state = useSelector(state => state.challenge);
   const dispatch = useDispatch();

   let arrDays = state.chellenge ;


function addChallengeText(days, chalenge){
   dispatch(addChallenge(days, chalenge));
   setDays('');
   setChalenge('')
   localStorage.setItem('days',days)
   localStorage.setItem('textChalenge',chalenge)
   setFlag(false)
}

function removeChallengeText(){
   
   dispatch(removeChallenge());
   localStorage.removeItem('days')
   localStorage.removeItem('textChalenge')
   localStorage.removeItem('chacked')
   setFlag(true)

}

const obj={}

const chalengeArr = [];

 function checkedToggle(id, e, obj){
   let chalengeNewArr = JSON.parse(localStorage.getItem('chacked'))
  
 const chalengeObj = {
    'id': id,
    check: true
}

if(chalengeNewArr!==null){
   for (let index = 0; index < chalengeNewArr.length; index++) {
      const element = chalengeNewArr[index];
     if( element.id === id ) return;
       }
}
 chalengeArr.push(chalengeObj)

localStorage.setItem('chacked', JSON.stringify(chalengeArr))
}

 useEffect(()=>{
   let keyNumber = localStorage.getItem('days')
   let textChalenge = localStorage.getItem('textChalenge')
   let chalengeNewArr = JSON.parse(localStorage.getItem('chacked'))
   
   
  
   if(keyNumber!== null ||  textChalenge!== null){
      dispatch(addChallenge( keyNumber, textChalenge));
      setFlag(false)
   }
 
 },[])
 
 
   return(
   
        <div className="container">
        <NavBar/>
       <h2>Challenge</h2>

       <Container>
          <Row>
            <Col sm={2}>
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
                        {arrDays.chellengeText===''
                          ?<h3>Tests not found</h3>
                          :arrDays.chellengeText
                        }
                     </div>
                  </Col>
               </Row>
            </Col>
            <Col sm={2}>
               <Button variant="outline-secondary"
                 onClick={()=>addChallengeText(days, chalenge)} 
                 disabled= { flag ? '' : 'disabled'} 
               >
                    Add
               </Button>
               <Button variant="outline-secondary"
                 onClick={()=>removeChallengeText(days, chalenge)} 
                 disabled= { flag ? 'disabled' : ''} 
               >
                    Remove
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
                 {arrDays.daysObj.length ===0
                   ? <h3>Start the test</h3>
                   :arrDays.daysObj.map((day, i)=>(
                    <div key={day.id} className="day">
                       <Form.Check  
                      inline
                      label={i+1}
                      id={day.id}
                      name="group1"
                      aria-label="option {day"
                      onChange={(e)=>checkedToggle(day.id, e, day)}
                     //  chacked = {setCheced(checed = !checed)}
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



