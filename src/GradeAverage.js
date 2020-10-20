import React from 'react';

const GradeAverage = props =>{

    let array = props.array;
    let average = array.reduce((a,b)=>a+b,0)/array.length;

    console.log(array + "avg: " + average);

return(
    <div>
        <ul>
        {array.map((val)=>{
           return (<li>{val}</li>)
        })}
        </ul>
    <span style={{color: "red"}}><span style={{color:"black"}}>Average: </span>{average}</span>    
    </div>
);

}

export default GradeAverage;