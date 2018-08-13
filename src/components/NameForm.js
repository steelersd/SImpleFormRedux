import React from 'react'
import styled, {css} from 'styled-components';
import Button from '../styles/Button'
import Row from '../styles/Row'
import Section from '../styles/Section'
import PropTypes from 'prop-types';


const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {border: 1px solid #555};
  textarea {border: 1px solid #555};
`

const Label = styled.label`
  display:inline-block;
  text-align: left;
  width: 140px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  font-weight: 400;
`;

const input = css
`  padding: 5px;
  margin: 8px 3px;
  width: 250px;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
`

const Input = styled.input`
  ${input}
`
const TextArea = styled.textarea`
  ${input}
`

const NameForm = props => {
  
  
  const rand = val => {
    return (new Date()).valueOf() + val
  }

    let {firstName, lastName, age , 
         description, fetching, onChange, 
         onSubmit , onGuid, getGuid, 
         groupSpin, actions, updateGUID, 
         updateGUIDWithCreator, handleSubmit} = props
    
    
    const onRandom = updateGUIDWithCreator(rand)
    
    console.log('NameForm')
    console.log(props)
    return (
      <Section border={true}>
      <StyledForm onSubmit={onSubmit}>
        
      <div>
        <Label>
          First Name:
          <Input
            type="text" 
            name = "firstName"
            firstName={props.firstName} 
            onChange={onChange} />
        </Label>  
      </div>
      <div>
        <Label>  
          Last Name:
          <Input 
            type="text" 
            name = "lastName"
            value={lastName} 
            onChange={onChange} />
        </Label>  
      </div>
      <div>
         <Label>
          Age:
          <Input 
            type="number" 
            name = "age"
            value={age} 
            onChange={onChange} />
        </Label>  
      </div>
      <div>
        <Label>
          Description:
          <TextArea 
            name="description" 
            value={description} 
            onChange={onChange} 
            rows="4" cols="50" maxlength="200"></TextArea>
        </Label>
      </div>
      
      <div>
        <Row>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </Row>
        <Row>
          <Button onClick={updateGUID} 
           > 
             Random Default GUID generator
          </Button>
          <Button onClick={() => onRandom(" Adam")}
           > 
            Random Override onClick
          </Button>
        </Row>        
        <Row>
          <Button disabled={fetching} onClick={onGuid}>
             REST Call guid {fetching}
          </Button>
          <label>
          Show Group Spin:
            <input
              name="groupSpin"
              type="checkbox"
              checked={groupSpin}
              onChange={onChange} />
          </label>
        </Row>
      </div>
      </StyledForm>
      </Section>
    );
  }


NameForm.propTypes = {
  firstName: PropTypes.string
};

NameForm.defaultProps = {
  firstsName: 'Adam' 
}

export default NameForm