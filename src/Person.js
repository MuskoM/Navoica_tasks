import React, { Component } from 'react';
import {Card, Paper} from "@material-ui/core";
import propTypes from 'prop-types';

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

class Person extends Component{

    constructor(props){
      super(props);
      this.state = {
        name : props.name,
        surname : props.surname,
        day: props.day,
        month: props.month,
        year: props.year,
        age: this.age(props)
      }
    }
  
    age = (birthDate) =>
    { 
        let dayNumber,monthNumber;
        console.log(birthDate);
        if(birthDate.month === undefined || birthDate.day === undefined){
          dayNumber = 1;
          monthNumber = 1;
        }else{
          dayNumber = birthDate.day
          monthNumber = months[birthDate.month]
        }
          

        let dateOfBirth = new Date(birthDate.year,monthNumber,dayNumber);
        let today = new Date();
        let tempdate = new Date(dateOfBirth.getFullYear(),today.getMonth(),today.getDate(),today.getHours());
        console.log("Date of Birth " + dateOfBirth + " Today " + today + " Tempdate: " + tempdate);
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
          {this.PrintAge(this.state)}
          { 1 < this.state.age%10 && this.state.age%10 < 5 ? <span>lata</span> : <span>lat</span> }
          </div> 
          </Paper> 
        </Card>
      )
    }
  }
  
  Person.propTypes = {
    
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
    day: propTypes.number,
    month: propTypes.string,
    year: propTypes.number.isRequired
  }
  
  Person.defaultProps = {
    name: "John",
    surname: "Doe",
    age: 0,
  }
export default Person;