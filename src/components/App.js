
import React from "react";
import ReactDOM from "react-dom";
import NameFormContainer from '../NameFormContainer'
import NameFormContainer2 from '../containers/NameFormContainer'
import DisplayContainer from '../containers/DisplayContainer'

import Display from '../Display'
import Info from '../Info'
import Section from '../styles/Section'

class App extends React.Component {
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleGuidAjax = this.handleGuidAjax.bind(this)
    this.state = {firstName: '', lastName: '', age : null, random: '', guid: '', fetching: false, groupSpin : false};
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    const {firstName, lastName, age, description} = this.state
    const message = `
      First Name : ${firstName}
      Last Name : ${lastName}
      Age : ${age}
      Description: ${description}
    `
    
    alert(message);
    event.preventDefault();
  }
  
  getRandom = (num=7) => {
    return Math.random().toString(36).substring(num)
  }
  
  handleRandom() {
    this.setState({random : this.getRandom(6)})
  }
  
  delayedGetGuid() { return (new Promise(
    function (resolve, reject) {
        setTimeout(() => {
          fetch('https://helloacm.com/api/random/?n=12')
          .then(function(response) {
            resolve(response.json());
          }
        )}
        ,2000)
     }
    ))};
  
//   getGuid() {
//      this.delayedGetGuid()
//     .then(function(myJson) {
//       console.log(myJson);
//     })
//   }
 
  handleGuidAjax() {
    this.setState({fetching : true})
    this.delayedGetGuid()
      .then(function(json) {
      console.log(this)
      this.setState({guid : json})
      this.setState({fetching : false})
  }.bind(this));
  
  /* 'this' is not what we hoped it would be...
  handleGuidAjax() {
    let that = this
     this.delayedGetGuid()
    .then(function(json) {
       console.log(that)
      that.setState({guid : json})
    });
    */
  }

  render() {
    let {firstName, lastName, age, description, random, guid, fetching, groupSpin} = this.state
    return (
      
      
      
      <div className="App">
        
        <NameFormContainer2 />
        <DisplayContainer   speak={"Hello"} />
        
        <Section>
          <NameFormContainer 
            onSubmit={this.handleSubmit} 
            onChange={this.handleInputChange} 
            onRandom={this.handleRandom} 
            onGuid={this.handleGuidAjax} 
            fetching={fetching}
            groupSpin={groupSpin}
            />      
          <Display
            firstName={firstName} 
            lastName={lastName} 
            age={age} 
            description={description}
            random={random}
            guid={guid}
            fetching={fetching}
            groupSpin={groupSpin}
            />
          <Info  firstName = {firstName} lastName={lastName}  age={age} description={description} random={random}/>
        </Section>
      </div>
    );  
  }
  
}

export default App