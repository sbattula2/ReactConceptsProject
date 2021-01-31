import React,{useState} from 'react'

const UseStateAsync = () => {
    
    const [someVal, setsomeVal] = useState(0)

    const increase = () =>{
        console.log('loopa')
        setTimeout(()=>setsomeVal((prevVal)=>{return prevVal+1}),750)
    }

    return (
        <div>
            <h2>UseState Async</h2>

            <h3>The value is {someVal}</h3>
            <button onClick={()=>{increase()}}>Increase after 0.5 seconds</button>

        </div>
    )
}

export default UseStateAsync