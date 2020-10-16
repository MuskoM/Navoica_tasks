import React, { Component } from 'react';

const Error = props =>{

    return(
        <div>
            {
                props.status ? (
                    <p style={{color: "green"}}>{props.info}</p>
                ):(
                    <p style={{color: "red"}}>{props.info}</p>
                )
            }
        </div>
    )

}

class ValidationComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameContainsOnlyLetters: false,
            surnameContainsOnlyLetters: false,
            nameHasFirstLetterUppercase: false,
            surnameHasFirstLetterUppercase: false,
        }
    }

        validation(event){
            let id = event.target.id;
            let data = event.target.value;
            var letters = /^[A-Za-z]+$/
            if(data.length >=1){
                if(data[0] === data[0].toUpperCase()){
                    this.setState({[id + "HasFirstLetterUppercase"]: true});
                }else{
                    this.setState({[id + "HasFirstLetterUppercase"]: false});
                }
            }

            if(data.match(letters)){
                this.setState({[id + "ContainsOnlyLetters"]: true});
            }else{
                this.setState({[id + "ContainsOnlyLetters"]: false});
            }
        }

    render(){
        const {nameContainsOnlyLetters,surnameContainsOnlyLetters,nameHasFirstLetterUppercase,surnameHasFirstLetterUppercase} = this.state;
        return(
            <div>
                <div>
                    Name: <input id="name" type="text" onChange={e => this.validation(e)}></input>
                    <Error status={nameHasFirstLetterUppercase} info="First letter has to be upper case"></Error>
                    <Error status={nameContainsOnlyLetters} info="Name should contain letters only"></Error>
                </div>
                <div>
                    Surname: <input id="surname" type="text" onChange={e=>this.validation(e)}></input>
                    <Error status={surnameHasFirstLetterUppercase} info="First letter has to be uppercase"></Error>
                    <Error status ={surnameContainsOnlyLetters} info="Surname should contain letters only"></Error>
                </div>
            </div>
        )
    }
}

export default ValidationComponent;