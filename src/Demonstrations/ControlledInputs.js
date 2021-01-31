import React,{useState} from 'react'

const ControlledInputs = () => {

    const submitForm = (event)=>{
        event.preventDefault();
    }

    const [inputVal,setInputVal] = useState('')

    return (
        <div>
            <form>
                <h2>Controlled Input Demonstration</h2>
                <h3>Whatever you type below will be copied here: {inputVal}</h3>
                <input type="text" onChange={(e)=>{setInputVal(e.target.value)}}></input>
            </form>
        </div>
    )
}

export default ControlledInputs
