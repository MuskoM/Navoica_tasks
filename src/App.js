import React, { Component } from 'react';
import IncrementButton from './IncrementButton';
import ValidationComponent from './Validator';
import Person from './Person'
import GradeAverage from './GradeAverage';

class App extends Component{
  render(){
    return ( 
      <div>
        <h2>2nd Module Tasks</h2>
        <Person name="Mateusz" surname="Muśko" month="february" year={1988}/>
        <h2>3rd Module Tasks</h2>
        <h3>IncrementButton</h3>
        <IncrementButton></IncrementButton>
        <h3>Validator</h3>
        <ValidationComponent></ValidationComponent>
        <h3>PrintPerson</h3>
        <Person name="Ala" surname="Makota" year={1999}></Person>
        <h3>Grade Average</h3>
        <GradeAverage array={[2,3,4.5,3.5,5]}></GradeAverage>
      </div>
      
  )
  }
}



export default App;
