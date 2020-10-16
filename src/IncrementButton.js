import React, { Component } from 'react';

class IncrementButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment(){
        this.setState(prevState => {
            let prev = this.state.counter
            prev = prev +1;
            return{counter: prev};
        })}

    render(){
        return(
            <div>
                <input type="button" onClick={()=>this.increment()} value="Click Me!"/>
                <p>I clicked the button {this.state.counter} times</p>
            </div>
        )
    }

}

export default IncrementButton;