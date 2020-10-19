import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Card, Paper} from "@material-ui/core"
import IncrementButton from './IncrementButton';
import ValidationComponent from './Validator';



class Person extends Component{

  constructor(props){
    super(props);
    this.state = {
      name : props.name,
      surname : props.surname,
      age: this.age(props)
    }
  }

  age = (birthDate) =>
  {
      const months = {
        "january": 1,
        "february": 2,
        "march": 3,
        "april": 4,
        "may": 5,
        "june": 6,
        "july": 7,
        "august": 8,
        "september":9,
        "october": 10,
        "november":11,
        "december":12,
      }
  
      let monthNumber = months[birthDate.month]
  
      let dateOfBirth = new Date(birthDate.year,monthNumber-1,birthDate.day);
      let today = new Date();
      let tempdate = new Date(dateOfBirth.getFullYear(),today.getMonth(),today.getDate(),today.getHours());
      
      return (tempdate>=dateOfBirth?today.getFullYear() - dateOfBirth.getFullYear() : today.getFullYear() - dateOfBirth.getFullYear() - 1);
  }

  PrintAge = (props) => {
    return <span>Age: {this.age(props) } </span>
  }
  
  

  render(){
    return (
      <Card style={{backgroundColor:"grey", width:"50%", textAlign:"center"}}>
        <Paper style={{backgroundColor:"lightgrey", margin:"20px"}}>
        <div style={{marginLeft:"10px"}}>
        <p><b> {this.state.name} {this.state.surname}</b></p>
        <p>Born: {this.state.day} {this.state.month} {this.state.year}</p>
        {this.PrintAge(this.state)};
        </div> 
        </Paper> 
      </Card>
    )
  }


}




Person.propTypes = { 
  name: function(props,propName,component){
    if(props[propName].length<3){
      return new Error(propName + " was too short.")
    }
  },
  surname: function(props,propName,component){
    if(props[propName].length<3){
      return new Error(propName + " was too short.")
    }
  },
}

Person.defaultProps = {
  name: "John",
  surname: "Doe",
  age: 0,
}

class App extends Component{
  render(){
    return ( 
      <div>
        <h3>2nd Module Tasks</h3>
        <Person name="Mateusz" surname="Muśko" day={10} month="january" year={1999}/>
        <h3>3rd Module Tasks</h3>
        <h4>IncrementButton</h4>
        <IncrementButton></IncrementButton>
        <h4>Validator</h4>
        <ValidationComponent></ValidationComponent>
      </div>
      
  )
  }
}



export default App;
