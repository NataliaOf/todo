import React from "react";
import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function Form(){

   const [value, setValue] = useState('')
   return(
      <>
  

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>

  
</>
   )
}