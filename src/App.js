import React, { Component } from 'react';
import IncrementButton from './IncrementButton';
import ValidationComponent from './Validator';
import Person from './Person'

class App extends Component{
  render(){
    return ( 
      <div>
        <h3>2nd Module Tasks</h3>
        <Person name="Mateusz" surname="Muśko" day={10} month="january" year={1988}/>
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
