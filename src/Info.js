import React from 'react'
import styled, {css} from 'styled-components'
import Section from './styles/Section'

const Center = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width : 400px;
  margin: 0 auto;
`

const Image = styled.img ` 
  padding-top : 10px;
  padding-left : 10px;
  padding-right : 10px;
  width: 75px;
  border-radius: 50%;
` 

const Container = styled.div`
  min-height: 110px;
   width: 700px;
 align-items: center;
    justify-content: center;
  min-width: 300px;
  border: none;
  border: solid 1px;
  /*margin: auto;*/
  display: flex;
  flex-flow: row;
  font-family : 'Roboto';
  color : #6D6D6D;
  box-sizing: border-box;
`
 const Header = styled.div`
  font-size: 25px;
  color:#222222;
`

const Main = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  flex: 7;
`

const Right = styled.div`
  flex:.5;
  background-color: green;
`

const padded = css`
  padding: 0 10px
`

const Padded = styled.div`
 ${padded}
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  minheight: 40px;
  align-items: center;
  ${padded}
`

const Label = styled.span`
  font-weight: 900;
  color:#222222;
`

const Info = props => {
  let {firstName, lastName, age,  description, random} = props
  return (
    <Section>
      <Container>
          <div>
            <Image src="img_avatar3.png" alt="Avatar"  aria-hidden="true"></Image>
          </div>
        <Main>
          <Row><Header>{firstName} {lastName}</Header></Row>
          <Row>
            {age && <Padded><Label>Age</Label> {age}</Padded>}
          </Row>
          <Row>
            {description}
          </Row>
          <Row>
            {random}
          </Row>
        </Main>
      </Container>  
    </Section>
  )
}
export default Info

