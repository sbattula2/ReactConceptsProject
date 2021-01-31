import React from 'react'

const TernaryDemonstration = () => {
    let randVal = Math.random();
    return (
        <div>
            <h2>Ternary Operator Demonstration: {randVal}</h2>
            {
                (randVal>0.49) ? <h3>I'm being shown because the random value above is greater than 0.49</h3> : <h3>I'm being shown because the random value above is lesss than 0.49</h3>
            }
        </div>
    )
}

export default TernaryDemonstration
