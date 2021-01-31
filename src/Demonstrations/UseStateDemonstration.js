import React,{useState} from 'react'

const UseStateDemonstration = () => {

    const[num,setNum] =  useState(5)

    return (
        <div>
            <button onClick={()=>{setNum(num-1)}}>Decrease</button>
            <br></br>
            <br></br>
            <button onClick={()=>{setNum(num+1)}}>Increase</button>
            <br></br>
            <br></br>
            <h3>You current number is {num}</h3>

        </div>
    )
}

export default UseStateDemonstration
