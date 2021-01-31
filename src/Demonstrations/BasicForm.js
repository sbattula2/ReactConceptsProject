import React, {useState} from 'react'

const BasicForm = () => {

    const [someVal, setsomeVal] = useState("sdf")

    const submitForm=function(event){
        event.preventDefault();
        console.log('Form submitted')
        setsomeVal(event.target.someVal.value)
    }

    return (
        <div>
            <h2>Basic Form Demonstration</h2>
            <h3>Val: {someVal} </h3>
            <form onSubmit={submitForm}>
                <input type="text" name="someVal"></input>
                <button type="submit">Submit Form</button>

            </form> 
        </div>
    )
}

export default BasicForm
