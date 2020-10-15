import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Card, Paper} from "@material-ui/core"

const PrintAge = (props) => {
  return <span>Age: {age(props) } </span>
}

const age = (birthDate) =>
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

const Person = props => {
  return (
    <Card style={{backgroundColor:"grey", width:"50%", textAlign:"center"}}>
      <Paper style={{backgroundColor:"lightgrey", margin:"20px"}}>
      <div style={{marginLeft:"10px"}}>
      <p><b> {props.name} {props.surname}</b></p>
      <p>Born: {props.day} {props.month} {props.year}</p>
	    <p><PrintAge day={props.day} month={props.month} year={props.year}/> years old</p>
      </div> 
      </Paper> 
    </Card>
  )
}

PrintAge.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.string,
  day: PropTypes.number
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
      <Person name="Mateusz" surname="Muśko" day={10} month={12} year={1999}/>
  )
  }
}



export default App;
