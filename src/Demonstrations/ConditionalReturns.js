import React from 'react'

const ConditionalReturns = () => {

    const randVal = Math.random();    

    if(randVal>0.49){

    return (
        <div>
            <h3>I'm the number {randVal}</h3>
           <h3>This text appears when the number above is greater than 0.49</h3> 
        </div>
     )
    }

    else{
        return (
            <div>
            <h3>I'm the number {randVal}</h3>
             <h3>This text appears when the number above is less than or equal to 0.49</h3> 
            </div>
         )
    }

}

export default ConditionalReturns
