import React from 'react'

const ShortCircuitDemonstration = () => {

    let showAnd = 3;
    let noShowAnd;

    let showOr = 3;
    let noShowOr;

    return (
        <div>
            <h2>Short Circuit Operators Demonstration</h2>
            <h3>{`&&`} Operator</h3>
            {
                showAnd && <h3>I'm being shown because I'm in a shortcircuit operator and my preceding condition has a value of {showAnd}</h3>
            }
            {
                noShowAnd && <h3>I shouldn't be shown because I'm in a shortcircuit operator and my preceding condition has no value</h3>
            }
            <h3>{`||`} Operator</h3>

            {
                showOr || <h3>I shouldn't be shown, instead the preceding value should be shoown</h3>
            }
            {
                noShowOr || <h3>I should be shown, as im in an or short circuit operator with a previous or that has no value</h3>
            }
        </div>
    )
}

export default ShortCircuitDemonstration
