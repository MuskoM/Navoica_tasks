import React from 'react';

const GradeAverage = props =>{

    let array = props.array;
    let average = array.reduce((a,b)=>a+b,0)/array.length;

    console.log(array + "avg: " + average);

return(
    <div>
        {array.map((val,key)=>{
            <p>val</p>
        })}
    </div>
);

}

export default GradeAverage;