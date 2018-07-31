import React from 'react'
import { FormControl, FormGroup, Form, Button } from 'react-bootstrap'

const InputTab = (props) => {
    return (
      <Form onSubmit={ props.inputHandleSubmit }>
        <FormGroup>
        <FormControl  id="formID"
                      name="text"
                      type="text"
                      value = { props.inputTextProps }
                      placeholder="Enter City,Country"
                      onChange = { props.inputHandleChange }/>
                      {/* <Button type="submit" className="btn btn-outline-success" style={{ float: 'right'}}>Search</Button> */}
        </FormGroup>
      </Form>
      
    )
  }
export default InputTab;